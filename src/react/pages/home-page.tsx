/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:45 PM -- March 15, 2022.
 * Project: trevorsears.com
 */

import "./home-page.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Home extends React.Component<Props, State> {
	
	public render(): React.ReactNode {
		
		return (
			<Page name="home">
			
			</Page>
		);
		
	}
	
}
