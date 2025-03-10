---
title: 'Card'
type: 'component'
components:
- Card
- CardHeader
- CardGrid
- CardSection
- CardDivider
- CardFooter
- CardBody
- CardImageCap
- CardStatus
categories:
- Content
status: 'Stable'
designStatus: 'Done'
devStatus: 'In Progress'
notes: |
  A pass through from react-bootstrap
---

`Card` is a box of related content usually describing a single object. It can be composed of several subcomponents, we give full overview of those subcomponents below.

`Card` supports `vertical` and `horizontal` orientation which is controlled by `CardContext`, see examples below.

This component uses a `Card` from react-bootstrap as a base component and extends it with additional subcomponents. <br/> <a href="https://react-bootstrap.github.io/components/cards/" target="_blank" rel="noopener noreferrer">See React-Bootstrap for additional documentation.</a>

## Basic Usage

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Card style={{ width: isExtraSmall ? "100%" : "18rem" }}>
      <Card.ImageCap
        src="https://source.unsplash.com/360x200/?nature,flower"
        srcAlt="Card image"
      />
      <Card.Header
        title="Card Title"
      />
      <Card.Section>
        This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Footer>
        <Button>Action 1</Button>
      </Card.Footer>
    </Card>
)}
```

## With muted styling

Use `muted` prop to show `Card` in inactive state.

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Card style={{ width: isExtraSmall ? "100%" : "18rem" }} muted>
      <Card.ImageCap 
        src="https://source.unsplash.com/360x200/?nature,flower"
        srcAlt="Card image"
      />
      <Card.Header
        title="Card Title"
      />
      <Card.Section>
        This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Footer>
        <Button>Action 1</Button>
      </Card.Footer>
    </Card>
)}
```

## Clickable variant

You use `isClickable` prop to add additional `hover` and `focus` styling to the `Card`.

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Card style={{ width: isExtraSmall ? "100%" : "18rem" }} isClickable>
      <Card.ImageCap
        src="https://source.unsplash.com/360x200/?nature,flower"
        srcAlt="Card image"
      />
      <Card.Header
        title="Card Title"
      />
      <Card.Section>
        This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Footer>
        <Button>Action 1</Button>
      </Card.Footer>
    </Card>
)};
```

## As link
You can also use `Card` as a link by wrapping it into appropriate component, note that `Card` will override default 
link styling to make its content appear as a regular text.

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Hyperlink destination="https://www.edx.org">
      <Card style={{ width: isExtraSmall ? "100%" : "18rem" }} isClickable>
        <Card.ImageCap
          src="https://source.unsplash.com/360x200/?nature,flower"
          srcAlt="Card image"
        />
        <Card.Header title="Card Title"/>
        <Card.Section>
          This is a card section. It can contain anything but usually text, a list, or list of links. 
          Multiple sections have a card divider between them.
        </Card.Section>
        <Card.Footer>
          <Button>Action 1</Button>
        </Card.Footer>
      </Card>
    </Hyperlink>
)}
```

## Header
You may add a header by adding a ``Card.Header`` component.
This header displays a title, subtitle, and may contain actions.

```jsx live
<div>
  <Card className="mb-2">
    <Card.Header title="Title" />
  </Card>
  <Card>
    <Card.Header 
      title="Title"
      subtitle="Subtitle"
    />
  </Card>
</div>
```

### Actions
The `Card.Header` supports custom actions via the actions prop and renders them on the top right of the header.

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <div>
      <Card className="mb-2">
        <Card.Header
          title="Title"
          subtitle="Subtitle"
          isStacked={!!isExtraSmall}
          actions={
            <ActionRow 
              isStacked={!!isExtraSmall}
              style={{  marginBottom: isExtraSmall ? ".5rem" : 0 }}
            >
              <Button variant="tertiary">Action 1</Button>
              <Button>Action 2</Button>
            </ActionRow>
          } 
        />
      </Card>
      <Card>
        <Card.Header
          title="Title"
          subtitle="Subtitle"
          actions={
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-toggle-with-iconbutton"
                as={IconButton}
                src={MoreVert}
                iconAs={Icon}
                variant="primary"
                alt="Actions dropdown"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          }
        />
      </Card>
    </div>
)}
```

### Sizes
The `Card.Header` supports two size variants, ``"sm"`` and ``"md"``. 
Add ``size="sm"`` for smaller header content and actions.

```jsx live
<Card>
  <Card.Header
    title="Title"
    subtitle="Subtitle"
    actions={
      <ActionRow>
        <Button>Action</Button>
      </ActionRow>
    }
    size="sm"
  />
</Card>
```

## Section
`Card.Section` is the main block to display card content. Can include its own title and actions separate from other card components. Multiple sections have a `Card.Divider` between them.

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Card>
      <Card.Section 
        title="Section title"
        actions={
          <ActionRow isStacked={!!isExtraSmall}>
            <Button>Action 1</Button>
            <Button>Action 2</Button>
          </ActionRow>
        }
      >
        This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Divider />
      <Card.Section 
        title="Muted section"
        actions={
          <ActionRow isStacked={!!isExtraSmall}>
            <Button>Action 1</Button>
            <Button>Action 2</Button>
          </ActionRow>
        }
        muted
      >
        This is a muted variant.
      </Card.Section>
      <Card.Divider />
      <Card.Section>
        This is a section without title or actions, just content.
      </Card.Section>
    </Card>
)}
```

## Footer

`Card.Footer` is the bottom part of the card. Usually used to outline actions that can be taken on the card object.
Note that `Card.Footer` has a separate `orientation` prop which will override the value from `CardContext`, this was implemented because there are some use cases where you would want to display `Card` with horizontal orientation containing footer with vertical orientation.

### Vertical variant

```jsx live
() => {
  const footerLink = <a href='#link'>Footer text as a link</a>;
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <>
      <Card>
        <Card.Footer orientation={isExtraSmall ? "horizontal" : "vertical"}>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
        <Card.Divider />
        <Card.Footer 
          orientation={isExtraSmall ? "horizontal" : "vertical"} 
          textElement="Optional footer text to display"
        >
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
        <Card.Divider />
        <Card.Footer
          orientation={isExtraSmall ? "horizontal" : "vertical"} 
          textElement={footerLink}
        >
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card>
      <Card style={{ width: isExtraSmall ? "100%" : "40%" }}>
        <Card.Footer textElement="Stacked vertical variant" isStacked>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card>
    </>
  )
}
```

### Horizontal variant

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });
  
  return (
    <Card style={{ width: isExtraSmall ? "100%" : "40%" }}>
    <Card.Footer orientation="horizontal">
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </Card.Footer>
    <Card.Divider />
    <Card.Footer orientation="horizontal" textElement="Optional footer text to display">
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </Card.Footer>
    <Card.Divider />
    <Card.Footer orientation="horizontal" textElement="Horizontal stacked variant" isStacked>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </Card.Footer>
  </Card>
)}
```

## With Image Cap

`ImageCap` is an image that sits on the top or the left edge of a `Card`. Can contain an optional logo image.

```jsx live

() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Card style={{ width: isExtraSmall ? "100%" : "40%" }}>
      <Card.ImageCap
        src="https://source.unsplash.com/360x200/?nature,flower"
        srcAlt="Card image"
        logoSrc="https://via.placeholder.com/150"
        logoAlt="Card logo"
      />
      <Card.Header
        title="Title"
        subtitle="Subtitle"
      />
      <Card.Section 
        title="Section title"
      >
        This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Footer>
        <Button>Action 1</Button>
      </Card.Footer>
    </Card>
)}
```

## Horizontal variant

When using horizontal variant Paragon provides additional component `Card.Body` which acts as a wrapper for content you want to display between `ImageCap` and `Footer`. Use it if content contains multiple components.

```jsx live

() => {
  const isSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });
  
  return (
    <>
      <Card
        className="mb-4" 
        orientation={isSmall ? "vertical" : "horizontal"}
      >
        <Card.ImageCap
          src="https://source.unsplash.com/360x200/?nature,flower"
          srcAlt="Card image"
          logoSrc="https://via.placeholder.com/150"
          logoAlt="Card logo"
        />
        <Card.Body>
          <Card.Header
            title="Title"
            subtitle="Subtitle"
          />
          <Card.Section 
            title="Section title"
          >
            Here we want to display both Header and Section between ImageCap and Footer components, so we use Card.Body to accomplish that. 
          </Card.Section>
        </Card.Body>
        <Card.Footer orientation={isExtraSmall ? "horizontal" : "vertical"}>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card>
      <Card className="mb-4" orientation={isSmall ? "vertical" : "horizontal"}>
        <Card.ImageCap
          src="https://source.unsplash.com/360x200/?nature,flower"
          srcAlt="Card image"
          logoSrc="https://via.placeholder.com/150"
          logoAlt="Card logo"
        />
        <Card.Section 
          title="Section title"
        >
          In this Card we only want to display Section, therefore no need to use Card.Body wrapper.
        </Card.Section>
        <Card.Footer orientation={isExtraSmall ? "horizontal" : "vertical"}>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card>
      <Card orientation={isSmall ? "vertical" : "horizontal"}>
        <Card.ImageCap
          src="https://source.unsplash.com/360x200/?nature,flower"
          srcAlt="Card image"
          logoSrc="https://via.placeholder.com/150"
          logoAlt="Card logo"
        />
        <Card.Body>
          <Card.Header
            title="Title"
          />
          <Card.Section 
            title="Section title"
          >
            This is a special case where we want to have Footer with vertical orientation in the Card with horizontal orientation.
          </Card.Section>
          <Card.Footer orientation={isExtraSmall ? "horizontal" : "vertical"} textElement="Some footer text">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
)}
```

## Card status

Note that in the example below, the content of `Card` is wrapped inside `Card.Body`. The `d-flex` class is added for the `horizontal` orientation to achieve horizontal variant. The `flex-column` class is added for the main `Card` component.

```jsx live
() => {
  const [orientation, setOrientation] = useState('vertical');
  const [variant, setVariant] = useState('warning');
  
  const handleChangeOrientation = (e) => setOrientation(e.target.value);
  const handleChangeVariant = (e) => setVariant(e.target.value);
  const isVertical = orientation === 'vertical';
  
  return (
    <>
      {/* Example props form start */}
      <Form.Group>
        <Form.Label>Choose orientation</Form.Label>
        <Form.RadioSet
          name="orientation"
          onChange={handleChangeOrientation}
          value={orientation}
        >
          <Form.Radio value="vertical">Vertical</Form.Radio>
          <Form.Radio value="horizontal">Horizontal</Form.Radio>
        </Form.RadioSet>
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="select"
          name="variant"
          onChange={handleChangeVariant}
          value={variant}
          floatingLabel="Variant"
        >
          <option value="">Select a variant</option>
          <option value="primary">Primary</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="success">Success</option>
        </Form.Control>
      </Form.Group>
      {/* Example props form end */}
      
      <Card orientation={orientation} className={`flex-column ${isVertical ? 'w-50' : ''}`}>
        <Card.Header
          title="Card title"
        />
        <Card.Body className={!isVertical ? 'd-flex' : ''}>
          <Card.Section
            title="Section title"
          >
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Section>
          <Card.Footer className={!isVertical ? 'justify-content-end' : ''}>
            <Button>Save</Button>
            <Button variant="danger">Remove</Button>
          </Card.Footer>
        </Card.Body>
        
        <Card.Status icon={Warning} variant={variant}>
          Warning lorem ipsum dolor sit amet
        </Card.Status>
      </Card>
    </>
  );
};
```

## Card Content Block Empty
### With image

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Card style={{ width: isExtraSmall ? "100%" : "25rem" }}>
      <Card.ImageCap
        src="https://source.unsplash.com/360x200/?nature,flower" 
        srcAlt="Card image"
      />
      <Card.Section className="text-center">
        <h2>Headline</h2>
        <p>This is an optional text description.</p>
        <Button variant="brand">Action</Button>
      </Card.Section>
    </Card>
)}
```

### Without image

```jsx live

() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Card style={{ width: isExtraSmall ? "100%" : "25rem" }}>
      <Card.Section className="text-center">
        <h2>Headline</h2>
        <p>This is an optional text description.</p>
        <Button variant="brand">Action</Button>
      </Card.Section>
    </Card>
)}
```

### Horizontal variant with image

```jsx live
() => {
  const isSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Card orientation={isSmall ? "vertical" : "horizontal"}>
      <Card.ImageCap
        src="https://source.unsplash.com/360x200/?nature,flower" 
        srcAlt="Card image"
      />
      <Card.Body>
        <Card.Section>
          <h2>Headline</h2>
          <p>This is an optional text description.</p>
        </Card.Section>
      </Card.Body>
      <Card.Footer className="justify-content-end">
        <Button variant="brand">Action</Button>
      </Card.Footer>
    </Card>
)}
```

### Horizontal variant without image

```jsx live
() => {
  const isSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Card orientation={isSmall ? "vertical" : "horizontal"}>
      <Card.Section>
        <h2>Headline</h2>
        <p>This is an optional text description.</p>
      </Card.Section>
      <Card.Footer className="justify-content-end">
        <Button variant="brand">Action</Button>
      </Card.Footer>
    </Card>
)}
```

## With loading state
### Vertical variant

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Card isLoading style={{ width: isExtraSmall ? "100%" : "18rem" }}>
      <Card.ImageCap
        src="https://source.unsplash.com/360x200/?nature,flower"
        srcAlt="Card image"
      />
      <Card.Header title="Card Title" />
      <Card.Section>
        This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Footer>
        <Button>Action 1</Button>
      </Card.Footer>
    </Card>
)}
```

### Horizontal variant

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Card isLoading orientation={isExtraSmall ? "vertical" : "horizontal"}>
      <Card.ImageCap
        skeletonHeight={isExtraSmall && 140}
        src="https://source.unsplash.com/360x200/?nature,flower"
        srcAlt="Card image"
        logoSrc="https://via.placeholder.com/150"
        logoAlt="Card logo"
      />
      <Card.Body>
        <Card.Header title="Title" />
        <Card.Section title="Section title">
          This is a special case where we want to have Footer with vertical 
          orientation in the Card with horizontal orientation.
        </Card.Section>
        <Card.Footer orientation="vertical" textElement="Some footer text">
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
)}
```

## CardGrid

This component displays a collection of Cards as a grid (with customizable responsive behavior), where
all cards in a given row have equal height. Try shrinking the width of your browser to view the responsive
behavior.

```jsx live
<CardGrid
  columnSizes={{
    xs: 12,
    lg: 6,
    xl: 4,
  }}
>
  <Card>
    <Card.ImageCap
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This content is a little bit longer.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This content is a little bit longer.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGrid>
```

## CardDeck (Deprecated)

This component gives any child Card components equal height with an appropriate gutter between cards. However,
it is meant to be used as a single horizontal row of Cards, not as a grid. See CardGrid for more details.

**Note**: this component is deprecated and is going to be removed soon.

```jsx live
<CardDeck>
  <Card>
    <Card.ImageCap
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This content is a little bit longer.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
```
