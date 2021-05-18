# Caesar cipher CLI tool

### Running
```bash
npm install
```

### Usage
From the root:
```
node . -a [encode|decode] -s [positive_number] -i [path] -o [path]

Options:
  --help        Show help                                              [boolean]
  --version     Show version number                                    [boolean]
  -s, --shift   a shift                                      [number] [required]
  -i, --input   an input file                                           [string]
  -o, --output  an output file                                          [string]
  -a, --action  an action encode/decode                      [string] [required]

```

### Notes for checking person
Criteria for cross checking:
https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/cross-check/caesar-cipher-cli-tool.md

Implemented only basic requirements.

There are 11 points for basic requirements. Expected marks:

```
+--------------+--------------------+-------------------+
| Point number | Expected mark min  | Expected mark max |
+--------------+--------------------+-------------------+
|            1 |                 10 |                10 |
|            2 |                 10 |                10 |
|            3 |                 10 |                10 |
|            4 |                  5 |                10 |
|            5 |                 10 |                10 |
|            6 |                 10 |                10 |
|            7 |                 10 |                10 |
|            8 |                  5 |                10 |
|            9 |                  5 |                10 |
|           10 |                 10 |                10 |
|           11 |                  5 |                10 |
+--------------+--------------------+-------------------+
```
Total expected mark: 90-110
