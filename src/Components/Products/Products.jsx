import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Products/products.module.css";
import { Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image, useToast, Wrap, WrapItem } from '@chakra-ui/react'

//homepage work
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, getSofas } from "./productRedux/productAction";

export default function Products() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSofas());
    }, [])
    const { sofas, isLoading } = useSelector(state => state);
    console.log(sofas);

    return <div>
        <div className={styles.singleCard}>
            {sofas.map(item => <ProductCard item={item} />)}
        </div>
    </div>
}

const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const toast = useToast();
    const select = useSelector(state => state);
    function handleClick() {
        addToCart(item, dispatch);
        console.log(select);
        <Wrap>
            <WrapItem key={item.id}>
                {toast({

                    status: "success",
                    isClosable: true,
                    variant: "solid",
                    duration: 2000,
                    render: () => (
                        <div style={{ backgroundColor: "#7D777C", padding: "10px", color: "#fff", fontWeight: "bold", textAlign: "center" }}>
                            Added to Cart!
                        </div>
                    )
                })
                }
            </WrapItem>
        </Wrap>
    }


    return (
        <Card maxW='sm' overflow='hidden' boxShadow='lg' mx='auto' mt={8}>
            <CardBody>
                <Image
                    src={item.image}
                    alt=""
                />
                <Stack mt='6' spacing='3'>
                    <Heading fontSize='xl' fontWeight='semibold'>{item.name}{item.title}</Heading>
                    <Text color='orange.600' fontSize='xl' fontWeight='semibold'>
                        Rs. {item.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button colorScheme='customColor' variant='solid' size='lg' bg='#766C75' color='gray.100' _hover={{
          bg: "#605B5F"}}
                        onClick={handleClick}>
                        Add to cart
                    </Button>
                    <Button variant='ghost' colorScheme='customColor' size='lg' color='orange.600'>
                        More details
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>

    )
};


