import { Page, Layout, Card, Button } from '@shopify/polaris';
import React from 'react';


export const ContactUsLayout = () => {
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Card>
                        <div className="contact-us-wrapper">

                            <p>
                                Can't find the feature you're looking for?
                            </p>
                            <p>Reach out to us to share your thoughts or request a feature you need.</p>
                            <Button>Contact us</Button>

                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}