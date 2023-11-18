import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
            <h2> Just React </h2>
            <h3>
                <FiberManualRecordIcon />
                {/*user.displayName*/}
            </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
	color: white;
  background-color: lightgray;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarInfo = styled.div`
     flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  /* Targeting the FiberManualRecordIcon in the h3 in SideBarInfo */
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
`;

const SidebarHeader = styled.div`
display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  /* Targeting the CreateIcon */
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
