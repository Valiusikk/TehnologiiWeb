import './App.css'
import {useState} from 'react'
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import {data, BigComment} from "./data";

function App() {
    const [comments, bComments] = useState(data)
    return (
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar/>
                    <Feed />
                    <Rightbar />
                </Stack>
            </Box>
    );
}

export default App