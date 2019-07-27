import React from 'react';
import { imageToBase64 } from '../../../util/image';

const adaptFileEventToValue = delegate =>
    async e => {
        
        return delegate(await imageToBase64(e.target.files[0]))
    }

export const renderFileInput = ({
    className,
    input: {
        value: omitValue,
        onChange,
        onBlur,
        ...inputProps
    },
    meta: omitMeta,
    ...props
}) =>
    <div className="input-group">
        <div className="custom-file">
            <input
                lang="pt-br"
                className={`custom-file-input ${className ? className : ''}`.trim()}
                onChange={adaptFileEventToValue(onChange)}
                onBlur={adaptFileEventToValue(onBlur)}
                type="file"
                id={inputProps.name}
                {...inputProps}
                {...props}
            />
            <label className="custom-file-label" htmlFor={inputProps.name}>{props.label}</label>
        </div>
    </div>

