import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { ThemeContextConsumer } from '../../context/themer';
import { Redirect } from 'react-router-dom';

export default function ViewSummary() {


    return(
        typeof localStorage.summary !== 'undefined' ?
        <ThemeContextConsumer>
            {(themeContext) => (
                <div style = {{
                    minHeight: '100vh',
                    paddingTop: '5vh',
                    backgroundColor: themeContext.dark && '#212121',
                    color: themeContext.dark && 'white',
                    fontWeight: '300'
                }}>  
                    <Container>
                        <Typography variant = "h2" align='left' gutterBottom>Summary</Typography>
                        <Typography variant = "body1" align='justify'>{localStorage.summary}</Typography>
                    </Container>
                </div>
            )}
        </ThemeContextConsumer> :
        <Redirect to = '/summarizer'/>
    )
}