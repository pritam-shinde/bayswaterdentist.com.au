import { Card, CardContent, CardMedia, Typography, Box, List, ListItem, ListItemIcon, ListItemText, CardActions } from "@mui/material"
import Link from "next/link"
import { Check } from '@mui/icons-material'
import Styles from '../../styles/Home/Offer.module.css'
import { useEffect, useState } from "react"

const CustomCard = ({ height, cardMedia, cardMediaAlt, mediaHeight, navlink, anchor, link, cardText, cardTitle, bgColor, cardList, icon, offerBtn, price, small, blogMedia }) => {
    const [width, setWidth] = useState();

    useEffect(()=>{
        setWidth(window.innerWidth)
    },[width])

    return (
        <>
            <Card className={`shadow`} style={{ height: height && width > 900 ? height : "auto", position:"relative" }}>
                {
                    cardMedia ? <CardMedia component="img" image={cardMedia.src} alt={cardMediaAlt} height={mediaHeight ? mediaHeight : "200"} /> : null
                }
                {
                    blogMedia ? <CardMedia component="img" image={blogMedia} alt={cardMediaAlt} height={mediaHeight ? mediaHeight : "200"} /> : null
                }
                {
                    cardText || cardText || cardList ? <CardContent className={bgColor ? 'isColor' : null}  >
                        {
                            cardTitle ? <Typography variant="h5" className="cardHead" gutterBottom>{navlink ? <Link href={link}>
                                <a>{cardTitle}</a>
                            </Link> : anchor ? <a href={link}>{cardTitle}</a> : cardTitle}</Typography> : null
                        }
                        {
                            cardText ? <Typography className="para" dangerouslySetInnerHTML={{ __html: cardText }} /> : null
                        }
                        {
                            cardList !== null ? cardList.length > 0 ? <Box>
                                <List>
                                    {
                                        cardList.map(item => <ListItem key={item.id}>
                                            {icon ? <ListItemIcon><Check style={{ color: "var(--blue)" }} /></ListItemIcon> : null}
                                            <ListItemText primary={item} className="para" />
                                        </ListItem>)
                                    }
                                </List>
                            </Box> : null : null
                        }
                    </CardContent> : null}
                {
                    offerBtn && small ? <CardActions className={`d-block ${Styles.OfferBtnSmall}`}><Box py={2} style={{ backgroundColor: "var(--navy)", borderRadius: "0.5rem", width:"100%", display:"block" }}>
                        <Typography align="center" style={{ color: "#fff", fontWeight: "600", fontSize: "1.5rem" }}>{price}</Typography>
                    </Box>
                        <Typography className="para font-weight-bold" style={{ color: "var(--blue)" }} align="center">{small}</Typography>
                    </CardActions> : null
                }

            </Card>
        </>
    )
}

export default CustomCard