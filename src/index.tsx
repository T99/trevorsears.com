/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:45 PM -- March 15, 2022.
 * Project: trevorsears.com
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./react/pages/home-page";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<Navigate replace to="/home" />} />
				<Route path="/index" element={<Navigate replace to="/home" />} />
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('react-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
