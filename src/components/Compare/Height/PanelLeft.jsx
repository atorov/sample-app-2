import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@material-ui/core'

const PanelLeft = ({ classes }) => (
    <Card className={classes.root}>
        <CardActionArea>
            {/* <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
            /> */}
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    Enter Your Height
                </Typography>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles,
                    with over 6,000 species, ranging across all continents
                    except Antarctica
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="secondary">
                Clear Data
            </Button>
        </CardActions>
    </Card>
)

PanelLeft.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles({
    root: { margin: '16px 8px' },
})(PanelLeft)
