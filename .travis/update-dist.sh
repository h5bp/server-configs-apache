#!/bin/bash

cd "$(dirname "${BASH_SOURCE[0]}")"

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# Automatically update the content from the `dist/` directory.
# (See: https://github.com/alrra/travis-scripts#readme)

$(npm bin)/set-up-ssh --key "$encrypted_22ef8dc7aed9_key" \
                      --iv "$encrypted_22ef8dc7aed9_iv" \
                      --path-encrypted-key "github-deploy-key.enc" \
    && $(npm bin)/commit-changes --branch "master" \
                                 --commands "npm run build:dist" \
                                 --commit-message "Update the generated content [skip ci]"
