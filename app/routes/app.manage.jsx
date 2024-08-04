import {
  Button,
  Card,
  Layout,
  Page,
  Text,
  BlockStack,
  TextField,
  useIndexResourceState,
  IndexTable
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

const feeds = [
  {
    name: 'Test',
    update: '02-02-2024',
    status: 'Active',
    id: 'lkgalh'
  },
  {
    name: 'Test',
    update: '02-02-2024',
    status: 'Active',
    id: 'adfa'
  },
  {
    name: 'Test',
    update: '02-02-2024',
    status: 'Active',
    id: 'rewrew'
  },
  {
    name: 'Test',
    update: '02-02-2024',
    status: 'Active',
    id: 'vmvbnvv'
  }
]

const resourceName = {
  singular: 'feed',
  plural: 'feeds',
};

export default function ManageFeed() {
  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(feeds);

  const rowMarkup = feeds.map(({id, name, update, status}) => (
    <IndexTable.Row
      id = {id}
      name = {name}
      update = {update}
      status = {status}
      selected = {selectedResources.includes(id)}
    >
      <IndexTable.Cell>{name}</IndexTable.Cell>
      <IndexTable.Cell>{update}</IndexTable.Cell>
      <IndexTable.Cell>{status}</IndexTable.Cell>
      <IndexTable.Cell>{id}</IndexTable.Cell>
    </IndexTable.Row>
  ))

  return (
    <Page fullWidth>
      <TitleBar className="title-bar" title="Manage Feeds">
        <button 
          variant="primary"
          onClick={() => console.log('button action')}
        >
          New Feed
        </button>
      </TitleBar>
      <Layout>
        <Layout.Section>
          <Card>
            test
          </Card>
        </Layout.Section>
        <Layout.Section>
          <IndexTable
            resourceName={resourceName}
            itemCount={feeds.length}
            selectedItemsCount={
              allResourcesSelected ? 'All' : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            headings={[
              {title: 'Name'},
              {title: 'Date'},
              {title: 'Status'},
              {title: 'ID'},
            ]}
          >
            {rowMarkup}
          </IndexTable>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
