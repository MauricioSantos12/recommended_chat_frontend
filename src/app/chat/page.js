"use client";

import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [isAsking, setIsAsking] = useState(false);
  const [conversation, setConversation] = useState([
    {
      id: 1,
      content: "Are you satisfied with the current state of the app?",
      type: "question",
    },
    {
      id: 2,
      content: "Yes",
      type: "answer",
    },
    {
      id: 3,
      content: "Have you encountered any bugs or issues?",
      type: "question",
    },
    {
      id: 4,
      content: "No",
      type: "answer",
    },
    {
      id: 5,
      content: "Do you have any suggestions or improvements for the app?",
      type: "question",
    },

    {
      id: 6,
      content: "Maybe",
      type: "answer",
    },
  ]);
  const sendQuestion = () => {
    const _conversation = [...conversation];
    _conversation.push({
      id: conversation.length + 1,
      content: question,
      type: "question",
    });
    setIsAsking(true);
    setConversation(_conversation);

    setTimeout(() => {
      _conversation.push({
        id: _conversation.length + 1,
        content: "Yes, " + question,
        type: "answer",
      });
      setConversation(_conversation);
      setIsAsking(false);
    }, 1000);
    setQuestion("");
  };

  return (
    <>
      <style jsx>{`
        .loader {
          width: 60px;
          aspect-ratio: 4;
          background: radial-gradient(circle closest-side, #000 90%, #0000) 0 /
            calc(100% / 3) 100% space;
          clip-path: inset(0 100% 0 0);
          animation: l1 1s steps(4) infinite;
        }
        @keyframes l1 {
          to {
            clip-path: inset(0 -34% 0 0);
          }
        }
      `}</style>

      <Stack
        flexDir={"column"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        h="100%"
      >
        <Stack w="full" height={"90%"}>
          {conversation.map((data) => (
            <Stack
              w="full"
              alignItems={data.type == "answer" ? "flex-end" : "flex-start"}
            >
              <Stack
                key={data.id}
                mb={2}
                bg={data.type == "answer" ? "gray.300" : "gray.900"}
                color={data.type == "answer" ? "black" : "white"}
                px={4}
                py={2}
                borderRadius={4}
                width={"fit-content"}
              >
                <Text>{data.content}</Text>
              </Stack>
            </Stack>
          ))}
          {isAsking && (
            <Stack w="full" alignItems={"flex-end"}>
              <Stack
                mb={2}
                bg={"gray.300"}
                color={"black"}
                px={4}
                py={2}
                borderRadius={4}
                width={"fit-content"}
              >
                <div className="loader"></div>
              </Stack>
            </Stack>
          )}
        </Stack>
        <Stack
          w="full"
          height={"auto"}
          flexDir={"row"}
          gap={2}
          flexWrap={"wrap"}
        >
          <Input
            _disabled={isAsking}
            placeholder="Pregunta cualquier cosa"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            w="89%"
          />
          <Button
            _disabled={isAsking}
            onClick={sendQuestion}
            colorScheme="blue"
            w="10%"
            minW={"80px"}
          >
            Enviar
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
