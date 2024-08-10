import { Page, Layout, Card, Button } from '@shopify/polaris';
import React from 'react';
import "../styles/index.css"

export const ContactUsLayout = () => {
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Card>
                        <div className="contact-us-wrapper">

                            <p className="contact-us-title">
                                Can't find the feature you're looking for?
                            </p>
                            <p className="contact-us-description">Reach out to us to share your thoughts or request a feature you need.</p>
                            <Button variant="primary">Contact us</Button>

                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}