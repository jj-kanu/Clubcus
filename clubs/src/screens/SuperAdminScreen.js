import React, { useState, useEffect} from "react";
import {
    Menu,
    Layout,
    Row,
    Col,
    Typography,
    Button
} from "antd";

import "./SuperAdminComponents.css";

import ClubsList from "../components/ClubsList/ClubsList.js";
import NavBar from "../components/NavBar/NavBar.js";
import ApprovalRequest from "../components/ApprovalRequest/ApprovalRequest.js"
import SearchBar from "../components/GroupSearch/SearchBar.js"
import { Group } from "antd/lib/avatar";
import GroupsList from "../components/GroupSearch/GroupsList";


const { Text } = Typography;
const { Content, Sider } = Layout;

let clubsData = [
    {
        "title": "Math",
        "description": "A club for math enthusiasts",
        "image": "/math-club.png"
                     
    },
    {
        "title": "English",
        "description": "A club for lit nerds",
        "image": "/english-club.png"
                     
    },
    {
        "title": "French",
        "description": "A club for those who want to dip their toes in the French language",
        "image": "/french-club.png"
                   
    }
]

let clubsRequests = [
    {
        "id": "a",
        "title": "Astronomy Club",
        "description": "A club for those who are interested in what is out there in our universe",
        "approved": false
    },
    {
        "id": "b",
        "title": "Computer Science Club",
        "description": "A club for those who love to code",
        "approved": false
    },
    {
        "id": "c",
        "title": "Chess Club",
        "description": "A club for those who want to be like Beth Harmon",
        "approved": false
    }
]



const filterGroups = (groups, query) => {
    if (!query) {
        return groups;
    }
    return groups.filter((group) => {
        const groupName = group.title.toLowerCase();
        return groupName.includes(query)
    })
}

class SuperAdminScreen extends React.Component {

    render() {
        //const resultQuery = this.props.location.state.query;
        //const amountOfResults = this.props.location.state.data.length;

        const amountOfResults = clubsData.length;

        const { search } = window.location;
        const query = new URLSearchParams(search).get('s');
        const filteredGroups = filterGroups(clubsData, query);

        
        return (
            <div>
                <Layout>
                    <NavBar userType="superadmin"/>

                    <SearchBar/>
                    
                    {amountOfResults !=0 && (

                        <Layout className="background">
                        <Row className="row" justify="space-between" align="middle">
                            <Col>
                                {amountOfResults == 1 ? (
                                    <Text>
                                        Showing {amountOfResults} clubs 
                                    </Text>
                                ) : (
                                    <Text>
                                        Showing {amountOfResults} clubs
                                    </Text>
                                )}
                            </Col>
                        </Row>
                    </Layout>

                    )}
                    
                </Layout>
                
                <Layout className="background">
                    <Sider>
                        <Row justify="center" className="refresh">
                            <Button>REFRESH REQUESTS</Button>
                        </Row>
                        <ApprovalRequest data={clubsRequests}/>
                    </Sider>
                    <Content className="clubscontainer background">
                        <ClubsList clubs={filteredGroups}>

                        </ClubsList>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default SuperAdminScreen;