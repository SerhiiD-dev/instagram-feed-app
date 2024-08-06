import { Page, Layout, Card, Button } from '@shopify/polaris';
import React from 'react';


export const InstagramLoginLayout = () => {
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Card title="Online store dashboard">
                        <div className="instagram-login-wrapper">
                            <div className="instagram-login-wrapper-left">
                                <p>
                                    Connect Instagram account to get started
                                </p>
                                <p>Start the first step to create feed by connecting your instagram account</p>
                                <Button>Add account </Button>
                            </div>
                            <div className="instagram-login-wrapper-right">
                                <img src="./instagram80x80.svg" />
                            </div>
                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}