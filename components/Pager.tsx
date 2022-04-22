import React from "react";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from "@chakra-ui/icons";

type pagerProps = {
  pages: number,
  page: number,
  prev: string,
  next: string,
  setUrl: Function,
  initialUrl: string
}

const Pager = ({ pages, page, prev, next, setUrl, initialUrl }: pagerProps) => (
  <Flex justifyContent="center" m={4} alignItems="center">
    <Flex>
      <Tooltip label="First Page">
        <IconButton
          aria-label="first-page-button"
          onClick={() => setUrl(initialUrl)}
          isDisabled={prev === null}
          icon={<ArrowLeftIcon h={3} w={3} />}
          mr={4}
        />
      </Tooltip>
      <Tooltip label="Previous Page">
        <IconButton
          aria-label="previous-page-button"
          onClick={() => setUrl(prev)}
          isDisabled={prev === null}
          icon={<ChevronLeftIcon h={6} w={6} />}
        />
      </Tooltip>
    </Flex>

    <Flex alignItems="center">
      <Text mx={8}>
        Page{" "}
        <Text fontWeight="bold" as="span">
          {page}
        </Text>{" "}
        /{" "}
        <Text fontWeight="bold" as="span">
          {pages}
        </Text>
      </Text>
    </Flex>

    <Flex>
      <Tooltip label="Next Page">
        <IconButton
          aria-label="next-page-button"
          onClick={() => setUrl(next)}
          isDisabled={next === null}
          icon={<ChevronRightIcon h={6} w={6} />}
        />
      </Tooltip>
      <Tooltip label="Last Page">
        <IconButton
          aria-label="last-page-button"
          onClick={() => setUrl(`${initialUrl}?page=${pages}`)}
          isDisabled={next === null}
          icon={<ArrowRightIcon h={3} w={3} />}
          ml={4}
        />
      </Tooltip>
    </Flex>
  </Flex>
);

export default Pager;
