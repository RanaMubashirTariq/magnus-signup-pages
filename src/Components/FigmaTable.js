import React from "react";
import { Avatar, Table, TableBody, useMediaQuery , TableCell, TableContainer, TableHead, TableRow, Typography, Checkbox } from "@mui/material";
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './FigmaTable.css';

export default function FigmaTable() {
    const rows = [
        { 
          id: 1, 
          userId: "119000", 
          avatar: "https://i.pravatar.cc/40?img=1", 
          email: "Sa***@gm***.com", 
          date: "12 Aug 2024", 
          level: "Level 1", 
          staked: "$600", 
          referrer: "119001", 
          commissions: "$120", 
          academy: true 
        },
        { 
          id: 2, 
          userId: "119001", 
          avatar: "https://i.pravatar.cc/40?img=2", 
          email: "Sa***@gm***.com", 
          date: "12 Aug 2024", 
          level: "Level 1", 
          staked: "$20,000", 
          referrer: "119001", 
          commissions: "$1000", 
          academy: true 
        },
        { 
          id: 3, 
          userId: "119002", 
          avatar: "https://i.pravatar.cc/40?img=3", 
          email: "Sa***@gm***.com", 
          date: "12 Aug 2024", 
          level: "Level 2", 
          staked: "$20,000", 
          referrer: "119001", 
          commissions: "$1000", 
          academy: true 
        },
        { 
          id: 4, 
          userId: "119003", 
          avatar: "https://i.pravatar.cc/40?img=4", 
          email: "Sa***@gm***.com", 
          date: "12 Aug 2024", 
          level: "Level 2", 
          staked: "$20,000", 
          referrer: "119001", 
          commissions: "$1000", 
          academy: true 
        },
        { 
          id: 5, 
          userId: "119004", 
          avatar: "https://i.pravatar.cc/40?img=5", 
          email: "Sa***@gm***.com", 
          date: "12 Aug 2024", 
          level: "Level 2", 
          staked: "$5,000", 
          referrer: "119001", 
          commissions: "$250", 
          academy: true 
        }
      ];
      
      const isMobile = useMediaQuery('(max-width:880px)');

  return (
    <div className="figmatable">
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table sx={{ overflowX:'scroll'}}>
        <TableHead >
          <TableRow     sx={{  backgroundColor: "#f8f9fa",borderRadius: "8px", '& th': {fontWeight: "500", color: "#6c757d", whiteSpace: "nowrap",},
    }} >
            <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' , padding: isMobile ? '10px' : ' '}}>#</TableCell>
            <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' , padding: isMobile ? '10px' : ' '}}>User ID</TableCell>
            <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' , padding: isMobile ? '10px' : ' ' }}>Sign Up Date</TableCell>
            <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' , padding: isMobile ? '10px' : ' ' }}>Level</TableCell>
            <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' , padding: isMobile ? '10px' : ' '}}>Total Staked</TableCell>
            <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' , padding: isMobile ? '10px' : ' '}}>Referrer</TableCell>
            <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' , padding: isMobile ? '10px' : ' '}}>Commissions</TableCell>
            <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' , padding: isMobile ? '10px' : ' '}}>Wealth Academy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" , flexWrap:'wrap'}}>
                  <Avatar src={row.avatar} />
                  <div>
                    <Typography variant="body2" fontWeight="bold">
                      {row.userId}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {row.email}
                    </Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell sx={{ fontSize: isMobile ? '10px' : '14px', whiteSpace: "nowrap"  }}>{row.date}</TableCell>
              <TableCell sx={{ fontSize: isMobile ? '10px' : '14px', whiteSpace: "nowrap" }}>{row.level}</TableCell>
              <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' }}>{row.staked}</TableCell>
              <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' }}>{row.referrer}</TableCell>
              <TableCell sx={{ fontSize: isMobile ? '10px' : '14px' }}>{row.commissions}</TableCell>
              <TableCell>
                <CheckCircleIcon sx={{ color: "green" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}