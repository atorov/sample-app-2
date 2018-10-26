import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const PanelLeft = ({ classes }) => (
    <Paper className={classes.root}>
        Left Panel
    </Paper>

    // <Card className={classes.card}>
    //     <CardActionArea>
    //         <CardMedia
    //             className={classes.media}
    //             image="/static/images/cards/contemplative-reptile.jpg"
    //             title="Contemplative Reptile"
    //         />
    //         <CardContent>
    //             <Typography gutterBottom variant="h5" component="h2">
    //                 Lizard
    //       </Typography>
    //             <Typography component="p">
    //                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    //                 across all continents except Antarctica
    //       </Typography>
    //         </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //         <Button size="small" color="primary">
    //             Share
    //     </Button>
    //         <Button size="small" color="primary">
    //             Learn More
    //     </Button>
    //     </CardActions>
    // </Card>
)

PanelLeft.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles({
    root: {
        margin: '16px 8px',
        padding: '16px',
    },
})(PanelLeft)
