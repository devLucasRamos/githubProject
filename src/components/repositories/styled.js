import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
border-radius: 16px;
border: 1px solid #ccc;
padding: 8px;
user-select: none;
cursor: pointer;
box-shadow: 0 0 1em purple;
z-index: 9999;
background-collor: #fff;
margin: 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-botton: 1px solid white;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-botton: 1px solid white;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
