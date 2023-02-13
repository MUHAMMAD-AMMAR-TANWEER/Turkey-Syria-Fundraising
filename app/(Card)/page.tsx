import { Card, Col, Row, Button, Text, Grid, Spacer } from "@nextui-org/react";

export const Card5 = () => (
  <Card css={{ w: "95%", h: "550px", m: "10px 30px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h2 color="white" weight="bold">
          Turkey and Syria Earthquake: How to help
        </Text>
        <Text size={24}  color="white">
          You can donate to verified fundraisers to help the indivisuals  and communities affected <br /> by the 7.8 magnitude earthquake.
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src= "https://image.cnbcfm.com/api/v1/image/107190012-1675773393943-gettyimages-1246861640-AFP_338P68C.jpeg?v=1675816970"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              
            </Col>
            <Col>
              <Text color="#d1d1d1" size={12}>
                
              </Text>
              <Text color="#d1d1d1" size={12}>
                
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={20}
                weight="bold"
                transform="uppercase"
              >
                DONATE
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default function SubCard() {
  return (
      <Grid.Container gap={2} css={{m:"5px 20px"}}>
        <Spacer x={5} />
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Situation</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
            As of Monday, the death toll from magnitude 7.8 and 7.6 earthquakes was close to 30,000 in Turkey, and more than 4,500 in Syria. In the ancient city of Antakya, historically known as Antioch, the scale of destruction is hard to fathom amid collapsed buildings everywhere. Almost every building that remains standing is cracked, horribly distorted or leaning perilously.
            </Text>
          </Card.Body>
          <Card.Divider />
        </Card>
      </Grid>
      
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Card Title</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Share
              </Button>
              <Button size="sm" color="secondary">
                Learn more
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
