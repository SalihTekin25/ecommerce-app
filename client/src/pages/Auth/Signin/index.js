import { useFormik } from "formik";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack
} from "@chakra-ui/react";

function Signin() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordconfirm: "",
            rememberMe: false
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, null, 2));
        }
    });
    return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
            <Box bg="white" p={6} rounded="md">
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                        <FormControl>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </FormControl>
                        <Checkbox
                            id="rememberMe"
                            name="rememberMe"
                            onChange={formik.handleChange}
                            isChecked={formik.values.rememberMe}
                            colorScheme="purple"
                        >
                            Remember me?
                        </Checkbox>
                        <Button type="submit" colorScheme="purple" width="full">
                            Login
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Flex>
    );
}

export default Signin