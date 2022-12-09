BUILD_PATH="lib"
echo "Copy @types ... ⏳ "

NO_CODE_PATH="../no-code-platform/node_modules/@voltmoney/types"
[ -d $NO_CODE_PATH ] && rm -rf $NO_CODE_PATH/"lib" && echo "👉 Clear -> $NO_CODE_PATH/lib ✅ "
mkdir -p $NO_CODE_PATH/"lib" && echo "👉 Link -> $NO_CODE_PATH/lib ✅ "
[ -d $NO_CODE_PATH ] && cp -R $BUILD_PATH $NO_CODE_PATH && echo "👉 Copy @types -> NO_CODE_PATH ✅ "
