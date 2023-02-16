import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ErrorProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}
