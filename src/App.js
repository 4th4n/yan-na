import React, {useState} from 'react';
import { ProdListProvider } from './ProdListContext';
import ProdManagement from './ProductManagement';
import StockManagement from './StockManagement';
import CategoryManagement from './CategoryManagement';
import TransactionReport from './TransactionReport';
import TransactionManagement from './TransactionManagement';
import LineChart from './LineChart';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Product Management');

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  const TabContent = () => {
    if (selectedTab === 'Product Management') {
      return <ProdManagement />;
    } else if (selectedTab === 'Stock Management') {
      return <StockManagement />;
    } else if (selectedTab === 'Category Management') {
      return <CategoryManagement />;
    } else if (selectedTab === 'Transaction Management') {
      return <TransactionManagement />;
    } else if (selectedTab === 'Line Chart') {
      return <LineChart />;
    } else if (selectedTab === 'Transaction Report') {
      return <TransactionReport />;
    }
    return null;
  };

  return (
    <ProdListProvider>
      <div style={{fontSize:'20px',color:'black',marginTop:'5px'}}>
        <Tabs 
        style={{ backgroundColor:'lightblue'}}
          id="tab-navigation"
          activeKey={selectedTab}
          onSelect={handleTabSelect}
          className="text default"
          justify
          variant='underline p-2'
          
        
          
        >
          <Tab style={{marginTop:"20px"}} eventKey="Product Management" title="PRODUCTS">
            {TabContent()}
          </Tab>
          <Tab style={{marginTop:"20px"}} eventKey="Category Management" title="CATEGORIES">
            {TabContent()}
          </Tab>
          <Tab style={{marginTop:"20px"}} eventKey="Transaction Management" title="TRANSACTIONS">
            {TabContent()}
          </Tab>
          <Tab style={{marginTop:"20px"}}eventKey="Stock Management" title="STOCKS">
            {TabContent()}
          </Tab>
          <Tab style={{marginTop:"20px"}}eventKey="Transaction Report" title="REPORTS">
            {TabContent()}
          </Tab>
          <Tab style={{marginTop:"20px"}}eventKey="Line Chart" title="STOCK LINE GRAPH">
            {TabContent()}
          </Tab>
        </Tabs>
      </div>
    </ProdListProvider>
  );
};

export default App;
