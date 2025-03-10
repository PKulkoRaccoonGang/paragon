---
title: 'Button'
type: 'component'
components:
- Button
categories:
- Buttonlike
status: 'Stable'
designStatus: 'Done'
devStatus: 'TO DO'
notes: |
  TODO: Remove subcomponent of deprecated implementation soon
---

This component utilizes `Button` from React-Bootstrap and extends it with an ability to add icons before and after button label, see [below](#with-icons-before-or-after) for usage example.<br/> <a href="https://react-bootstrap.github.io/components/buttons/" target="_blank" rel="noopener noreferrer"> See React-Bootstrap for additional documentation. </a>

## Core Buttons
```jsx live
<>
  <Button variant="brand" className="mb-2 mb-sm-0">Brand</Button>{' '}
  <Button variant="outline-brand" className="mb-2 mb-sm-0">Outline Brand</Button>{' '}
  <Button variant="primary" className="mb-2 mb-sm-0">Primary</Button>{' '}
  <Button variant="outline-primary" className="mb-2 mb-sm-0">Outline Primary</Button>{' '}
  <Button variant="tertiary" className="mb-2 mb-sm-0">Tertiary</Button>{' '}
</>
```
## Core Buttons (Inverse Pallete)
```jsx live
<div className="bg-dark-700 p-4">
  <Button variant="inverse-brand" className="mb-2 mb-sm-0">Brand</Button>{' '}
  <Button variant="inverse-outline-brand" className="mb-2 mb-sm-0">Outline Brand</Button>{' '}
  <Button variant="inverse-primary" className="mb-2 mb-sm-0">Primary</Button>{' '}
  <Button variant="inverse-outline-primary" className="mb-2 mb-sm-0">Outline Primary</Button>{' '}
  <Button variant="inverse-tertiary" className="mb-2 mb-sm-0">Tertiary</Button>{' '}
</div>
```

## Utility Buttons
```jsx live
<>
  <div className="mb-2">
    <Button variant="success" className="mb-2 mb-sm-0">Success</Button>{' '}
    <Button variant="danger" className="mb-2 mb-sm-0">Danger</Button>{' '}
    <Button variant="outline-success" className="mb-2 mb-sm-0">Success</Button>{' '}
    <Button variant="outline-danger" className="mb-2 mb-sm-0">Danger</Button>{' '}
  </div>
  <div className="mb-2">
    <Button variant="link" className="mb-2 mb-sm-0">Link</Button>{' '}
    <Button variant="light" className="mb-2 mb-sm-0">Light</Button> <Button variant="dark">Dark</Button>{' '}
    <Button variant="outline-light" className="mb-2 mb-sm-0">Light</Button>{' '}
    <Button variant="outline-dark" className="mb-2 mb-sm-0">Dark</Button>
  </div>
</>
```

## Size

```jsx live
<>
  <div className="mb-2">
    <Button variant="primary" size="lg" className="mb-2 mb-sm-0">
      Large button
    </Button>{' '}
    <Button variant="outline-primary" size="lg" className="mb-2 mb-sm-0">
      Large button
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="primary" size="sm" className="mb-2 mb-sm-0">
      Small button
    </Button>{' '}
    <Button variant="outline-primary" size="sm" className="mb-2 mb-sm-0">
      Small button
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="link" size="inline" className="mb-2 mb-sm-0">Inline button</Button>
    <Button variant="link" size="inline" className="mb-2 mb-sm-0">Inline button</Button>
  </div>
</>
```

### When to use the inline size

Use inline size buttons for when a button sits with a line of text.

```jsx live
<>
  <p>
    <span className="mr-1">2 items selected.</span>
    <Button variant="link" size="inline" className="mr-1">Select all</Button>
    <Button variant="link" size="inline">Clear</Button>
  </p>
</>
```

## Block Buttons

```jsx live
<>
  <Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button variant="secondary" size="lg" block>
    Block level button
  </Button>
</>
```

### With Icons before or after
```jsx live
<>
  <Button variant="brand" iconBefore={ArrowBack} className="mb-2 mb-sm-0">
    Brand
  </Button>{' '}
  <Button variant="outline-brand" iconAfter={ArrowDropDown} className="mb-2 mb-sm-0">
    Outline Brand
  </Button>{' '}
  <Button variant="primary" iconBefore={Remove} iconAfter={Add} className="mb-2 mb-sm-0">
    Primary
  </Button>{' '}
  <Button variant="outline-primary" iconBefore={Highlight} className="mb-2 mb-sm-0">
    Outline Primary
  </Button>{' '}
  <Button variant="tertiary" iconAfter={Add} className="mb-2 mb-sm-0">
    Tertiary
  </Button>{' '}
</>
```

### With a Spinner
```jsx live
<>
  <Button variant="primary" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
  <Button variant="brand" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
  <Button variant="outline-primary" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
  <Button variant="outline-brand" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
  <Button variant="inverse-primary" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
  <Button variant="inverse-brand" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
</>
```

***

## Button/Deprecated

### Basic Usage

```jsx live
<Button.Deprecated className="btn-primary">Hello World!</Button.Deprecated>
```

### Color Variants

```jsx live
<div>
  <Button.Deprecated className="btn-primary">Primary</Button.Deprecated>
  <Button.Deprecated className="btn-success">Success</Button.Deprecated>
  <Button.Deprecated className="btn-danger">Danger</Button.Deprecated>
  <Button.Deprecated className="btn-light">Light</Button.Deprecated>
  <Button.Deprecated className="btn-dark">Dark</Button.Deprecated>
</div>
```

### Outline Variants

```jsx live
<div>
  <Button.Deprecated className="btn-outline-primary">Primary</Button.Deprecated>
  <Button.Deprecated className="btn-outline-success">Success</Button.Deprecated>
  <Button.Deprecated className="btn-outline-danger">Danger</Button.Deprecated>
</div>
```

### Inverse Variants

```jsx live
<div className="bg-gray-700 p-3">
  <Button.Deprecated className="btn-inverse-primary">Primary</Button.Deprecated>
  <Button.Deprecated className="btn-inverse-success">Success</Button.Deprecated>
  <Button.Deprecated className="btn-inverse-danger">Danger</Button.Deprecated>
</div>
```

### Link Variant

```jsx live
<div className="bg-gray-200 p-3">
  <Button.Deprecated className="btn-link">Link with button container</Button.Deprecated>
  <br />
  <Button.Deprecated className="btn-link px-0">Button with no horizontal padding</Button.Deprecated>
</div>
```
