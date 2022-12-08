#!/usr/bin/env sh

# Trigger on rebuild of lib
# Copy to Volt App ->  only for dev use
APP_PATH="../volt-app/node_modules/@voltmoney/types"

[ -d $APP_PATH ] && cp -R $1 $APP_PATH/$1 && echo "👉 Watcher Copy @voltmoney/types -> Volt-App ✅ "
APP_PATH="../design-component/node_modules/@voltmoney/types"
[ -d $APP_PATH ] && cp -R $1 $APP_PATH/$1 && echo "👉 Watcher Copy @voltmoney/types -> DC/component ✅ "

#NO_CODE_PATH="../no-code-platform/node_modules/@voltmoney/types"
#[ -d $NO_CODE_PATH ] && cp -R $1 $NO_CODE_PATH/$1 && echo "👉 Watcher Copy @voltmoney/micro-frontend -> NO_CODE_PATH ✅ "
