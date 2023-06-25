import React from "react";
import { Link, Button, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { NextRouter, useRouter } from "next/router";

export default function NavButtons(props: any) {
  const {
    numOfExercises,
    section,
  }: { numOfExercises: number; section: string } = props;
  const router: NextRouter = useRouter();
  let currentExerciseNumber: number = Number(router.query.id);
  let hasPrevious: boolean =
    1 < currentExerciseNumber && currentExerciseNumber <= numOfExercises;
  const hasNext: boolean =
    0 < currentExerciseNumber && currentExerciseNumber < numOfExercises;

  let nextExerciseNumber: number = currentExerciseNumber + 1;
  let previousExerciseNumber: number = currentExerciseNumber - 1;

  return (
    <Flex justify="center" mt={5} gap={5}>
      {hasPrevious && (
        <Button value="previous" backgroundColor="secondary.dark" color="white">
          <Link href={`/${section}/${previousExerciseNumber}`}>
            <ChevronLeftIcon />
            Previous
          </Link>
        </Button>
      )}
      {hasNext && (
        <Button value="next" backgroundColor="primary.dark" color="white">
          <Link href={`/${section}/${nextExerciseNumber}`}>
            Next
            <ChevronRightIcon />
          </Link>
        </Button>
      )}
    </Flex>
  );
}
