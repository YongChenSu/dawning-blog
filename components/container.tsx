import { ReactNode, FunctionComponent } from 'react';

type Props = {
    children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
    return <div className="px-5 mx-auto w-full max-w-7xl">{children}</div>;
};

export default Container;
