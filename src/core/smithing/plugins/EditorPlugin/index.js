import React from 'react'
import Remove from 'material-ui/svg-icons/content/remove'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
const Divider = () => <Box>Hello World</Box>
export default {
  Component: Divider,
  name: 'eidenai/hello-world',
  version: '0.0.1',
  IconComponent: <Remove />,
  text: 'Hello World',
  description: 'Test the world'
}
