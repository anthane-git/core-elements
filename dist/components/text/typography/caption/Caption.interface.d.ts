import { HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLParagraphElement> {
    /**
     * Scale to render text
     */
    size?: 'Default';
}
