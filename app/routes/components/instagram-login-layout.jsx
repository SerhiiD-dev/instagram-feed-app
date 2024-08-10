import { Page, Layout, Card, Button } from '@shopify/polaris';
import React from 'react';
import '../styles/index.css'


export const InstagramLoginLayout = () => {
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Card>
                        <p className="instagram-login-wrapper-title">
                            Connect Instagram account to get started
                        </p>
                        <div className="instagram-login-wrapper">
                            <div className="instagram-login-wrapper-left">
                                <p>Start the first step to create feed by connecting your instagram account</p>
                                <Button variant="primary">Add account </Button>
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