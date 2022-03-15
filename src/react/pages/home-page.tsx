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

export class HomePage extends React.Component<Props, State> {
	
	public render(): React.ReactNode {
		
		return (
			<Page name="home">
				<section className="hello">
					<div className="width-wrapper">
						<h1>Hi!<br />I'm <span className="highlight">Trevor</span>.</h1>
					</div>
				</section>
			</Page>
		);
		
	}
	
}
