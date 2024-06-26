import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { ListItemAvatar } from '@mui/material';


export default function MediaCard({ data }) {
 /* console.log(data); */
 return (
   <>
   {
     data.map((item, index) => (
<Card sx={{ maxWidth: 345, padding: 2, marginTop:2 }}>
     <Box >
     <CardMedia
       sx={{
          height: 240, width: 300, backgroundSize: "contain",margin: "auto"}}
       image={`/employee-dashboard-react-app/${item.image}`}
       title="profile image"
     />
     </Box>
     <PetsIcon />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
      {item.firstName} {item.lastName}
       </Typography>
       <Typography variant="body2" color="text.secondary">
        {item.position}
       </Typography>
       <Stack direction="row"
       flexWrap="wrap"
       spacing={1} sx={{marginTop: 2, justifyContent: "center" }}>
     {item.skills.map((skill, skillIndex) => (
       <Chip sx={{marginTop: 2 }}key={skillIndex} label={skill} />

     ))}
   </Stack>


     </CardContent>
     <Stack direction="row" spacing={1}  sx={{marginTop: 2, justifyContent: "center" }}>
     <Chip label={item.onLeave? "Inacive" : "Active"}
     variant={item.onleave ? "outlined" : ""} />
     <Chip 
     label={`Hours: ${item.hoursLoggedThisWeek}`}
      variant="outlined"
       />
   </Stack>

   </Card>

   ))}
</>
   
 );
} 
