---
title: 可換な演算子の同時対角化可能性
date: "2022-01-30"
tags:
    - math
---

## 命題

> 対角化可能な演算子 \(A,B\) が可換なら \(A,B\) は同時対角化可能である。

## 証明

$A$ の相異なる固有値を $\qty{a_i}_i$ とし、$a_i$ に対応する固有空間への射影演算子を $\mathcal{P}_i$ とする。同様に $B$ の相異なる固有値 $\qty{b_j}_j$ および対応する射影演算子 $\qty{\mathcal{Q}_j}_j$ も定める。すると


\begin{align}
A&=\sum_i a_i\mathcal{P}_i,& \sum_i\mathcal{P}_i&=I,&\mathcal{P}_i\mathcal{P}_{i'}&=\delta_{ii'}\mathcal{P}_i\label{eq:a}\\
B&=\sum_j b_j\mathcal{Q}_j,& \sum_j\mathcal{Q}_j&=I,&\mathcal{Q}_j\mathcal{Q}_{j'}&=\delta_{jj'}\mathcal{Q}_j\label{eq:b}
\end{align}


より

\begin{align}
\mathcal{P}_i&=\dfrac{\prod_{l\neq i}(A-a_lI)}{\prod_{l\neq i}(a_i-a_l)}\\
\mathcal{Q}_j&=\dfrac{\prod_{m\neq j}(B-b_mI)}{\prod_{m\neq j}(b_j-b_m)}
\end{align}

と表せる。実際 $l\neq i$ に対して

\begin{align*}
\dfrac{A-a_lI}{a_i-a_l}&=\mathcal{P}_i+\sum_{n\neq l,i}\dfrac{a_n-a_l}{a_i-a_l}\mathcal{P}_n
\end{align*}

となり、これを $l\neq i$ に亘って掛け合わせると $\mathcal{P}_i$ だけが残る。$\mathcal{Q}_i$ も同様。そして、$\mathcal{P}_i,\mathcal{Q}_j$ は $A,B,I$ だけで表されているので可換である：

\begin{align}
\comm{\mathcal{P}_i}{\mathcal{Q}_j}=0.
\end{align}

このとき

\begin{align}
\sum_{i,j}\mathcal{P}_i\mathcal{Q}_j=&I,&(\mathcal{P}_i\mathcal{Q}_j)(\mathcal{P}_{i'}\mathcal{Q}_{j'})&=\delta_{ii'}\delta_{jj'}\mathcal{P}_i\mathcal{Q}_j\label{eq:pq-split}
\end{align}

が成り立つので $\qty{\mathcal{P}_i\mathcal{Q}_j}_{i,j}$ は射影であり、\eqref{eq:a}、\eqref{eq:b}から導かれる

\begin{align}
A&=\sum_{i,j} a_i\mathcal{P}_i\mathcal{Q}_j\\
B&=\sum_{i,j} b_j\mathcal{P}_i\mathcal{Q}_j
\end{align}

はスペクトル分解になっている。$\mathcal{P}_i$ に対応する固有空間を $W_i$、$\mathcal{Q}_j$ に対応する固有空間を $V_j$ とすると、$\eqref{eq:pq-split}$ は $\qty{W_i\cap V_j}_{i,j}$ によって Hilbert 空間 $\mathcal{H}$ を直和分解できることを意味している。各 $W_i\cap V_j$ は依然 $2$ 次以上の次元を持ちうるので適宜（Schmidt の直交化法などにより）$W_i\cap V_j$ 内の正規直交基底をとることで、$\mathcal{H}$ 全体の正規直交基底 $\qty{\ket{a_i,b_j,k}}_{i,j,k}$ であって

\begin{align}
A\ket{a_i,b_j,k}&=a_i\ket{a_i,b_j,k},& B\ket{a_i,b_j,k}=b_j\ket{a_i,b_j,k}
\end{align}

を満たすようなものを取ることができる。すなわち $A,B$ は同時対角化可能である。

## 余談

$\comm{A}{B}=0,\comm{B}{C}=0\implies\comm{A}{C}=0$だと何故か思い込んでいたけれど$B=\mathbb{1}$が反例でした。


# 参考文献

[ディラック記法による線形代数（PDF）](https://www.ims.tsukuba.ac.jp/~shugo_suzuki_lab/upload.pdf)
