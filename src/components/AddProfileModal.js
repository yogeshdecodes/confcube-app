import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useToast,
  useDisclosure,
} from '@chakra-ui/react';
import { updatePublicUser } from '../utils/db';
import { getUser } from '../utils/auth';

export const isBrowser = () => typeof window !== 'undefined';
const AddProfileModal = ({
  children,
  userName,
  userBio,
  userSkills,
  userLooking,
  userInterests,
  saveState,
  userSave,
}) => {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();

  const onCreateSite = ({ name, bio, mySkills, interests, lookingFor }) => {
    const user = getUser();
    const { uid } = user;
    isBrowser() &&
      updatePublicUser(uid, name, bio, mySkills, interests, lookingFor);

    saveState === 'false' ? userSave('true') : userSave('false');

    toast({
      title: 'Success!',
      description: 'Profile Updated Successfully',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    onClose();
  };

  return (
    <>
      <Button
        id="add-profile-modal-button"
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)',
        }}
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                defaultValue={userName}
                id="name-input"
                placeholder="name here"
                name="name"
                ref={register({
                  required: 'Required',
                })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Input
                defaultValue={userBio}
                id="bio-input"
                placeholder="My cool bio comes here"
                name="bio"
                ref={register}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>My Skills</FormLabel>
              <Input
                defaultValue={userSkills}
                id="skill-input"
                placeholder="My Expertise"
                name="mySkills"
                ref={register}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Interests</FormLabel>
              <Input
                defaultValue={userInterests}
                id="interest-input"
                placeholder="what i love to talk about"
                name="interests"
                ref={register}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Looking For</FormLabel>
              <Input
                defaultValue={userLooking}
                id="lookingfor-input"
                placeholder="looking for some cool devs like me"
                name="lookingFor"
                ref={register}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              id="create-site-button"
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProfileModal;
