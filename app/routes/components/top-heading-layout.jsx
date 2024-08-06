import { Page, Layout, Text } from '@shopify/polaris';
import React from 'react';


export const TopHeadingLayout = () => {
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Text variant="heading2xl" as="h1">Welcome to our app</Text>
                    <Text variant="headingSm" as="h4">Increase customer engagement with stunning galleries and shoppable feeds</Text>
                </Layout.Section>
            </Layout>
        </Page>
    );
}