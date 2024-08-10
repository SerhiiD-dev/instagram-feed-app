import { Page, Layout, Banner } from '@shopify/polaris';
import React from 'react';


export const MainPageNotificationLayout = () => {
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Banner padding="xs" title="Notification">For the first synchronization, the app displays up to 20 media. After auto or manual synchronization, all media is visible</Banner>
                </Layout.Section>
            </Layout>
        </Page>
    );
}