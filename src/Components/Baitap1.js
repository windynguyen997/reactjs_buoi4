import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Baitap1 = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Click Me
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Điền thông tin mua hàng</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup floating>
                            <Input
                                id="exampleEmail"
                                name="Tên"
                                placeholder="Tên"
                                type="email"
                            />
                            <Label for="exampleEmail">
                                Tên
                            </Label>
                        </FormGroup>
                        
                        <FormGroup floating>
                            <Input
                                id="sdt"
                                name="Nhập SĐT"
                                placeholder="Nhập SĐT"
                                type="text"
                            />
                            <Label for="examplePassword">
                                Số điện thoại
                            </Label>
                        </FormGroup>
                        
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                    Submit
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>

    );
}

export default Baitap1;
