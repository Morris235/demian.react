import React from "react";
import { Col, Row } from "antd";

interface HomePageProps {
    message: string;
}

const HomePage = ({message} : HomePageProps) => {
    return (
        <div className="HomePage">{message}</div>
    );
} 

export default HomePage;