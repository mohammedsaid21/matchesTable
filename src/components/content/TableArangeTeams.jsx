import { Typography } from '@mui/material';
import * as React from 'react';
// import Styled from '@emotion/styled';

import Madrid from "../../img/madrid.png"

function TableArangeTeams() {

  // let array = new Array(50);

  let array = [1,2,3,4,5,6,7,8,9,10]


  return (
    <div style={{ width: '100%', marginBottom: '2rem' }}>
      <Typography variant='h5' fontWeight="600" padding="50px 0 20px">جدول الترتيب</Typography>
      <table style={{ width: '97%' }}>
        <tbody>
        <tr style={{ background: "#f3f3f3" }}>
          <th style={{ width: '20px', textAlign: 'right', padding: 10 }}>#</th>
          <th
            style={{
              color: 'red',
              width: '250px',
              textAlign: 'right',
              padding: 10,
            }}
          >
            الفريق
          </th>
          <th style={{ width: '60px', textAlign: 'right', padding: 10 }}>
            لعب
          </th>
          <th style={{ width: '60px', textAlign: 'right', padding: 10 }}>
            فاز
          </th>
          <th style={{ width: '60px', textAlign: 'right', padding: 10 }}>
            تعادل
          </th>
          <th style={{ width: '60px', textAlign: 'right', padding: 10 }}>
            خسر
          </th>
          <th style={{ width: '60px', textAlign: 'right', padding: 10 }}>
            له
          </th>
          <th style={{ width: '60px', textAlign: 'right', padding: 10 }}>
            عليه
          </th>
          <th
            style={{
              color: 'red',
              width: '60px',
              textAlign: 'right',
              padding: 10,
            }}
          >
            نقاط
          </th>
        </tr>

        {
          array.map((e) => (
            <tr key={Math.random()}
              style={{
                textAlign: 'right',
                borderBottom: '1px solid #ccc',
              }}
            >
              <td style={{ padding: 10 }}>{e}</td>
              <td style={{ padding: 10, fontSize: "19px", display: 'flex', alignItems: "center" }}>
                <img src={Madrid} width="34px" height="34px" style={{ marginLeft: "10px", objectFit: "contain" }} alt="" />
                <Typography variant='h6'>Real Madrid</Typography>
                </td>
              <td style={{ padding: 10 }}>51</td>
              <td style={{ padding: 10 }}>5</td>
              <td style={{ padding: 10 }}>15</td>
              <td style={{ padding: 10 }}>95</td>
              <td style={{ padding: 10 }}>5</td>
              <td style={{ padding: 10 }}>55</td>
              <td style={{ color: 'red', padding: 10 }}>55</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}
export default TableArangeTeams;