// @flow
import React, {useCallback, useEffect, useRef, useState} from 'react';
import cx from 'classnames';
import {usePrevious} from '../hooks';
import css from './styles.module.css';

type Props = {
    className?: string,
    isActive: ?boolean,
}

const ProgressBar = ({className, isActive, progress: globalProgress}: Props) => {
    const [progress, setProgress] = useState(0);
    const [width, setWidth] = useState(1000);
    const prevIsActive = usePrevious(isActive);
    const step = useRef(0.01);
    const currentProgress = useRef(0);
    const requestFrame = useRef(null);
    const ref = useRef(null);

    useEffect(() => {
        if (isActive) {
            setProgress(0);
            step.current = 0.01;
            currentProgress.current = 0;
            startCalculateProgress();
        }

        if (prevIsActive === true && isActive === false) {
            if (requestFrame.current)
                cancelAnimationFrame(requestFrame.current);

            setProgress(100);
            setTimeout(() => setProgress(0), 800);
        }

        if (isActive === null) {
            if (requestFrame.current)
                cancelAnimationFrame(requestFrame.current);

            setProgress(0);
        }
    }, [isActive]);

    useEffect(() => {
        if (globalProgress !== null)
            setProgress(globalProgress);
        else {
            setProgress(0);
        }
    }, [globalProgress]);

    useEffect(() => {
        window.addEventListener('resize', onResize);

        if (ref.current)
            setWidth(ref.current.offsetWidth);

        return () => window.removeEventListener('resize', onResize);
    }, []);

    const startCalculateProgress = () => {
        requestAnimationFrame(calculateProgress);
    };

    const calculateProgress = useCallback(() => {
        currentProgress.current += step.current;
        const progress = Math.round(Math.atan(currentProgress.current) / (Math.PI / 2) * 100 * 1000) / 1000;

        setProgress(progress);

        if (progress > 70)
            step.current = 0.005;

        if (progress >= 100)
            cancelAnimationFrame(requestFrame.current);

        requestFrame.current = requestAnimationFrame(calculateProgress);
    }, [isActive]);

    const onResize = () => {
        if (ref.current)
            setWidth(ref.current.offsetWidth);
    };

    return (
        <div ref={ref} className={cx(css.bar, className)}>
            <div
                className={css.progress}
                style={{
                    width: `${progress}%`,
                    backgroundSize: `${width}px 5px`,
                }}
            />
        </div>
    );
};

export default ProgressBar;
