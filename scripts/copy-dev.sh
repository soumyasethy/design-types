BUILD_PATH="lib"
echo "Copy @volt/types ⏳ "

# 1.Copy to Volt App ->  only for dev use
APP_PATH="../volt-app/node_modules/@voltmoney/types"
[ -d $APP_PATH ] && rm -rf $APP_PATH/"lib" && echo "👉 Clear -> $APP_PATH/lib ✅ "
mkdir -p $APP_PATH/"lib" && echo "👉 Link -> $APP_PATH/lib ✅ " #&& cd .. #uncomment when run local
[ -d $APP_PATH ] && cp -R $BUILD_PATH $APP_PATH && echo "👉 Copy @volt/types -> Volt-App ✅ "

# 2.Copy to DC/component ->  only for dev use
APP_PATH="../design-component/node_modules/@voltmoney/types"
[ -d $APP_PATH ] && rm -rf $APP_PATH/"lib" && echo "👉 Clear -> $APP_PATH/lib ✅ "
mkdir -p $APP_PATH/"lib" && echo "👉 Link -> $APP_PATH/lib ✅ " #&& cd .. #uncomment when run local
[ -d $APP_PATH ] && cp -R $BUILD_PATH $APP_PATH && echo "👉 Copy @volt/types -> DC/component ✅ "

# 3.Copy to MF ->  only for dev use
APP_PATH="../micro-frontend/node_modules/@voltmoney/types"
[ -d $APP_PATH ] && rm -rf $APP_PATH/"lib" && echo "👉 Clear -> $APP_PATH/lib ✅ "
mkdir -p $APP_PATH/"lib" && echo "👉 Link -> $APP_PATH/lib ✅ " #&& cd .. #uncomment when run local
[ -d $APP_PATH ] && cp -R $BUILD_PATH $APP_PATH && echo "👉 Copy @volt/types -> MF ✅ "

# 4.Copy to Platform ->  only for dev use
APP_PATH="../design-paltform/node_modules/@voltmoney/types"
[ -d $APP_PATH ] && rm -rf $APP_PATH/"lib" && echo "👉 Clear -> $APP_PATH/lib ✅ "
mkdir -p $APP_PATH/"lib" && echo "👉 Link -> $APP_PATH/lib ✅ " #&& cd .. #uncomment when run local
[ -d $APP_PATH ] && cp -R $BUILD_PATH $APP_PATH && echo "👉 Copy @volt/types -> Platform ✅ "


#NO_CODE_PATH="../no-code-platform/node_modules/@volt/types"
#[ -d $NO_CODE_PATH ] && rm -rf $NO_CODE_PATH/"lib" && echo "👉 Clear -> $NO_CODE_PATH/lib ✅ "
#mkdir -p $NO_CODE_PATH/"lib" && echo "👉 Link -> $NO_CODE_PATH/lib ✅ " #&& cd .. #uncomment when run local
#[ -d $NO_CODE_PATH ] && cp -R $BUILD_PATH $NO_CODE_PATH && echo "👉 Copy @volt/types -> NO_CODE_PATH ✅ "
