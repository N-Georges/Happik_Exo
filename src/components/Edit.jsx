/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
    ButtonGroup,
    Editable,
    EditableInput,
    EditablePreview,
    Flex,
    IconButton,
    Input,
    useEditableControls,
} from '@chakra-ui/react';
import React from 'react';

const Edit = () => {
    const EditableControls = () => {
        const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
            useEditableControls();

        return isEditing ? (
            <ButtonGroup justifyContent="center" size="sm">
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent="center">
                <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
            </Flex>
        );
    };
    return (
            <Editable textAlign="center" defaultValue="Rasengan" isPreviewFocusable={false}>
                <EditablePreview />
                {/* Here is the custom input */}
                <Input as={EditableInput} />
                <EditableControls />
            </Editable>
    );
};

export default Edit;
