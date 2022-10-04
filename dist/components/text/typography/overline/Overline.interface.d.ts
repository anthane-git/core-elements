import { HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Scale to render text
     */
    size?: 'Default';
}
