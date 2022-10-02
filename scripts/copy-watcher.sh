#!/usr/bin/env sh

# Trigger on rebuild of lib
# Copy to Volt App ->  only for dev use
APP_PATH="../volt-app/node_modules/@volt/types"
#NO_CODE_PATH="../no-code-platform/node_modules/@volt/types"
[ -d $APP_PATH ] && cp -R $1 $APP_PATH/$1 && echo "👉 Watcher Copy @volt/types -> Volt-App ✅ "
#[ -d $NO_CODE_PATH ] && cp -R $1 $NO_CODE_PATH/$1 && echo "👉 Watcher Copy @volt/micro-frontend -> NO_CODE_PATH ✅ "
