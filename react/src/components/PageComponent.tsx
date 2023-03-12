import React, { ReactNode } from "react";

type Props = {
    title: string;
    buttons: ReactNode;
    children: any;
};

const PageComponent = (props: Props) => {

    return (
        <>
            <header className="bg-white shadow">
                <div className="flex items-center justify-between mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {props.title}
                    </h1>
                    {props.buttons}
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {props.children}
                </div>
            </main>
        </>
    );
};

export default PageComponent;
