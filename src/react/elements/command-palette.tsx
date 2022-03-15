/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:20 PM -- March 12th, 2022
 * Project: trevorsears.com
 */

import "./command-palette.scss";
import React from "react";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class CommandPalette extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <form className="command-palette">
                <input type="text" />
            </form>
        );
    
    }
    
}
