FROM node:11

RUN npm config set registry https://registry.npm.taobao.org

WORKDIR /opt/
ADD . /opt/
RUN npm install

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "-vvv", "-g", "-w", "--"]

<<<<<<< HEAD
EXPOSE 9528
=======
EXPOSE 9527
>>>>>>> b9196b076ab7431ce23e664fc9bb5e0825538dbe

CMD ['/usr/local/bin/npm', 'run', 'dev']
# docker run -d -P --name=vue-admin actanble/vue-element-admin npm run dev
