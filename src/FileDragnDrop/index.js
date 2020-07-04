// @flow
import React, {useEffect, useRef, useState} from 'react';
import cx from 'classnames';
import {useTranslation} from 'react-i18next';
import {formatBytes} from '../utils';
import css from './style.module.css';

type Props = {
    formats?: Array<string>,
    className?: string,
    loading?: boolean,
    progressPercent?: ?number,
    onChange?: Function,
}

const FileDragnDrop = ({
    formats,
    className,
    loading,
    progressPercent = null,
    onChange,
}: Props) => {
    const {t} = useTranslation();
    const inputRef = useRef(null);
    const [active, setActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const isDidMount = useRef(true);

    useEffect(() => {
        if (!isDidMount.current) {
            if (onChange)
                onChange(selectedFile);
        } else
            isDidMount.current = false;
    }, [selectedFile]);

    const onClick = event => {
        event.preventDefault();

        if (inputRef.current)
            inputRef.current.click();
    };

    const preventStop = event => {
        event.preventDefault();
        event.stopPropagation();
    };

    const onDrop = event => {
        preventStop(event);
        setActive(false);

        const [file] = event.dataTransfer.files;

        if (file && checkAvailableExtension(file))
            setSelectedFile(file);
    };

    const onDragEnter = event => {
        preventStop(event);
        setActive(true);

    };

    const onDragLeave = event => {
        preventStop(event);
        setActive(false);
    };

    const onChangeInput = event => {
        const [file] = event.target.files;

        if (file && checkAvailableExtension(file))
            setSelectedFile(file);
    };

    const removeFile = () => {
        setSelectedFile(null);
    };

    const checkAvailableExtension = file => {
        const ext = '.' + file.name.split('.').pop();

        let isAvailable;

        if (formats && formats.length)
            isAvailable = formats.some(format => {
                if (format === '.jpg' || format === '.jpeg')
                    return ext === '.jpg' || ext === '.jpeg';
                else
                    return format === ext;
            });
        else
            isAvailable = true;

        return isAvailable;
    };

    if (loading)
        return (
            <div className={cx(css.dnd, className, {active})}>
                <div className={css.loading}>
                    {t('Uploading')}&hellip;
                    {typeof progressPercent === 'number' && `${progressPercent}%`}
                </div>

                {typeof progressPercent === 'number' &&  (
                    <div className={css.progressBar}>
                        <div className={css.progress} style={{width: `${progressPercent}%`}} />
                    </div>
                )}
            </div>
        );

    if (selectedFile)
        return <div className={cx(css.file, className)}>
            <div className={css.fileExtend}>
                .csv
            </div>

            <div className={css.fileSection}>
                <div className={css.fileName}>{selectedFile.name}</div>
                <div className={css.fileSize}>{formatBytes(selectedFile.size)}</div>
            </div>

            <div onClick={removeFile} className={cx(css.fileRemove, 'mdi mdi-close')} />
        </div>;


    return (
        <div
            className={cx(css.dnd, className, {active})}
            onDrop={onDrop}
            onDragEnter={onDragEnter}
            onDragOver={onDragEnter}
            onDragLeave={onDragLeave}
        >
            <input
                ref={inputRef}
                onChange={onChangeInput}
                type="file"
            />

            <div className={css.placeholder}>
                {t('dragHereAFile')}
                {''}
                {Boolean(formats) && `(${formats.join(', ')})`}
                {' '}
                {t('or')}
                {' '}
                <a onClick={onClick} href="#">{t('upload')}</a>
                {' '}
                {t('fromYourComputer')}.
            </div>
        </div>
    );
};

export default FileDragnDrop;
