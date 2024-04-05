import React, { useState } from "react";
import { Box, Heading, Text, Input, Stack, Avatar, Badge, Button, Wrap, WrapItem, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Textarea, ModalFooter } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const developers = [
  {
    id: 1,
    name: "John Doe",
    location: "New York",
    technologies: ["React", "Node.js", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1469833120660-1a218b53d28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMzI4NjAxfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "London",
    technologies: [".NET", "C#", "Go"],
    avatar: "https://images.unsplash.com/photo-1485217988980-11786ced9454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTIzMjg2MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Mike Johnson",
    location: "San Francisco",
    technologies: ["React", "Node.js", "Go"],
    avatar: "https://images.unsplash.com/photo-1514543250559-83867827ecce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMzI4NjAxfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Sarah Lee",
    location: "Toronto",
    technologies: ["JavaScript", "React", ".NET"],
    avatar: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTIzMjg2MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredDevelopers = developers.filter((developer) => {
    const { name, location, technologies } = developer;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return name.toLowerCase().includes(lowerCaseSearchTerm) || location.toLowerCase().includes(lowerCaseSearchTerm) || technologies.some((tech) => tech.toLowerCase().includes(lowerCaseSearchTerm));
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleContactClick = (developer) => {
    setSelectedDeveloper(developer);
    onOpen();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement sending message functionality
    onClose();
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" textAlign="center" marginBottom={8}>
        Particles
      </Heading>
      <Text fontSize="xl" textAlign="center" marginBottom={8}>
        Discover top software talent specializing in web technologies like React, Node.js, .NET, Go, and JavaScript.
      </Text>
      <Stack spacing={4} direction="row" align="center" marginBottom={8}>
        <Input placeholder="Search by name, location, or technology" value={searchTerm} onChange={handleSearch} />
        <Button leftIcon={<FaSearch />} colorScheme="blue">
          Search
        </Button>
      </Stack>
      <Wrap spacing={8}>
        {filteredDevelopers.map((developer) => (
          <WrapItem key={developer.id}>
            <Box maxWidth="300px" borderWidth={1} borderRadius="lg" overflow="hidden" padding={4}>
              <Avatar size="2xl" src={developer.avatar} alt={developer.name} marginBottom={4} />
              <Heading as="h2" size="lg" marginBottom={2}>
                {developer.name}
              </Heading>
              <Text marginBottom={2}>{developer.location}</Text>
              <Wrap marginBottom={4}>
                {developer.technologies.map((tech) => (
                  <WrapItem key={tech}>
                    <Badge colorScheme="green">{tech}</Badge>
                  </WrapItem>
                ))}
              </Wrap>
              <Button colorScheme="blue" onClick={() => handleContactClick(developer)}>
                Contact
              </Button>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact {selectedDeveloper?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Enter your message" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Send
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
