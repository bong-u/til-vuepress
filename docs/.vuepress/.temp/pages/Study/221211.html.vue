<template><div><h1 id="ood" tabindex="-1"><a class="header-anchor" href="#ood" aria-hidden="true">#</a> OOD</h1>
<h2 id="dynamic-dispatch-and-multiple-inheritance" tabindex="-1"><a class="header-anchor" href="#dynamic-dispatch-and-multiple-inheritance" aria-hidden="true">#</a> Dynamic dispatch and multiple inheritance</h2>
<h3 id="dynamic-dispatch" tabindex="-1"><a class="header-anchor" href="#dynamic-dispatch" aria-hidden="true">#</a> dynamic dispatch</h3>
<ul>
<li>virtual keyword로 정의되어야 함</li>
<li>pointer나 reference로 호출되어야 함</li>
</ul>
<h3 id="overriding-keyword" tabindex="-1"><a class="header-anchor" href="#overriding-keyword" aria-hidden="true">#</a> overriding keyword</h3>
<ul>
<li>명시적 표시 -&gt; 직관적인 코드</li>
<li>Overriding non-virtual, non-existing function 예방</li>
</ul>
<h3 id="dynamic-dispatch의-원리" tabindex="-1"><a class="header-anchor" href="#dynamic-dispatch의-원리" aria-hidden="true">#</a> dynamic dispatch의 원리</h3>
<ul>
<li>VTABLE : 클래스마다 존재, 실행되어야하는 함수들의 정적 배열</li>
<li>VPTR : 객체마다 멤버 변수의 형태로 존재, VTABLE의 함수를 point</li>
</ul>
<h3 id="abstract-class" tabindex="-1"><a class="header-anchor" href="#abstract-class" aria-hidden="true">#</a> Abstract class</h3>
<ul>
<li>abstract class : 1개 이상의 virtual 함수를 포함하는 클래스</li>
<li>pure virtual function : &quot; =0 &quot;</li>
<li>polymorphic class
<ul>
<li>적어도 1개 이상의 virtual function을 정의하거나 상속받는 클래스</li>
<li>base class에서는 destructor를 virtual하게 정의하여야 한다</li>
</ul>
</li>
</ul>
<h3 id="multiple-inheritance" tabindex="-1"><a class="header-anchor" href="#multiple-inheritance" aria-hidden="true">#</a> Multiple inheritance</h3>
<ul>
<li>
<p>Destructor calling sequence</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Developer : public Citizen, public Employee {...}
// Developer -&gt; Employee -&gt; Citizen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="diamond-problem-in-multiple-inheritance" tabindex="-1"><a class="header-anchor" href="#diamond-problem-in-multiple-inheritance" aria-hidden="true">#</a> Diamond problem in multiple inheritance</h3>
<ul>
<li>
<p>두 부모가 동일한 이름의 멤버 함수 또는 변수를 가진다</p>
</li>
<li>
<p>자식에서 이를 사용하려고하면 컴파일 오류 발생</p>
</li>
<li>
<p>부모의 함수들이 모두 virtual, 자식에서 정의된 member function 사용 -&gt; 가능</p>
</li>
<li>
<p><strong>한 부모의 function만 virtual한 경우엔??</strong></p>
</li>
</ul>
<h2 id="design-pattern" tabindex="-1"><a class="header-anchor" href="#design-pattern" aria-hidden="true">#</a> Design pattern</h2>
<h3 id="singleton" tabindex="-1"><a class="header-anchor" href="#singleton" aria-hidden="true">#</a> Singleton</h3>
<h3 id="builder" tabindex="-1"><a class="header-anchor" href="#builder" aria-hidden="true">#</a> Builder</h3>
<ul>
<li>builder 객체 분리</li>
<li>builder는 원래 객체의 friend (builder가 자유롭게 access 가능)</li>
</ul>
<h3 id="prototype" tabindex="-1"><a class="header-anchor" href="#prototype" aria-hidden="true">#</a> Prototype</h3>
<ul>
<li>
<p>clone 함수는 부모에서는 pure virtual, 자식에서 구현</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>Shape* Clone() const { return new Circle(color_, radius_); }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="abstract-factory" tabindex="-1"><a class="header-anchor" href="#abstract-factory" aria-hidden="true">#</a> Abstract factory</h3>
<ul>
<li>비슷한 객체들을 만드는 공장 클래스 생성</li>
<li>부모 가구 공장 클래스(polymorphic)</li>
<li>-&gt; 자식 공장1(현대적 디자인), 자식 공장2(고전 디자인)</li>
</ul>
<h3 id="adapter" tabindex="-1"><a class="header-anchor" href="#adapter" aria-hidden="true">#</a> Adapter</h3>
<ul>
<li>서로 호환되지 않는 두 라이브러리/모듈을 연결 하기 위해 사용</li>
</ul>
<h3 id="bridge" tabindex="-1"><a class="header-anchor" href="#bridge" aria-hidden="true">#</a> Bridge</h3>
<ul>
<li>abstract class와 이를 구현하는 class로 구성</li>
<li>abstract class를 이용해 다양한 변화에 대응</li>
</ul>
<h3 id="composite" tabindex="-1"><a class="header-anchor" href="#composite" aria-hidden="true">#</a> Composite</h3>
<ul>
<li>하나의 부모와 하위 여러 자식을 통해 Tree모양 형성</li>
<li>객체를 만들어 부모클래스 자료형에 저장한다</li>
<li>-&gt; 모든 자식들에 대해 일관적으로 사용 가능</li>
</ul>
<h3 id="facade" tabindex="-1"><a class="header-anchor" href="#facade" aria-hidden="true">#</a> Facade</h3>
<ul>
<li>복잡한 인터페이스들 앞에 간단한 인터페이스 생성</li>
<li>의존적인 모듈에 업데이트가 필요하다면 해당 모듈만 업데이트 하도록 구현</li>
</ul>
<h3 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h3>
<ul>
<li>third-party 모듈과 client 사이에 사용</li>
<li>third-party 모듈이 노출되지 않음 -&gt; 보안 향상</li>
<li>중간에서 입맛대로 조정 가능</li>
</ul>
<h2 id="stl-standard-template-library" tabindex="-1"><a class="header-anchor" href="#stl-standard-template-library" aria-hidden="true">#</a> STL(Standard Template Library)</h2>
<h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h3>
<h3 id="vector" tabindex="-1"><a class="header-anchor" href="#vector" aria-hidden="true">#</a> vector</h3>
<ul>
<li>현재 있는 메모리가 부족하면 더 큰 연속적인 메모리 공간을 찾아 할당</li>
</ul>
<h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3>
<ul>
<li>random access 불가</li>
<li>push_front 가능</li>
</ul>
<h3 id="deque" tabindex="-1"><a class="header-anchor" href="#deque" aria-hidden="true">#</a> deque</h3>
<ul>
<li>random access 지원</li>
<li>push_front 가능</li>
</ul>
<h3 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> stack</h3>
<ul>
<li>top 함수로 가장 위에 있는 값 확인 가능</li>
</ul>
<h3 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> queue</h3>
<ul>
<li>front로 맨 앞 원소, back으로 맨 뒤 원소 확인 가능</li>
</ul>
<h3 id="functor-함수-객체" tabindex="-1"><a class="header-anchor" href="#functor-함수-객체" aria-hidden="true">#</a> functor (함수 객체)</h3>
<ul>
<li>Functor와 Function pointer의 비교</li>
</ul>
<ol>
<li>
<p>functor는 internal states를 가질 수 있다</p>
</li>
<li>
<p>컴파일러가 type-check를 해주고, 최적화 될 수 있다</p>
</li>
</ol>
<ul>
<li>참고
<ul>
<li>&quot;if (x &lt; y) return true&quot;하면 오름차순</li>
</ul>
</li>
</ul>
<h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3>
<ul>
<li>unique한 요소들을 특정한 순서로 저장하는 자료구조</li>
</ul>
<h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3>
<ul>
<li>key와 value를 가지는 요소들을 특정한 순서로 저장하는 자료구조</li>
</ul>
<h2 id="tempalte" tabindex="-1"><a class="header-anchor" href="#tempalte" aria-hidden="true">#</a> Tempalte</h2>
<ol>
<li>Class template</li>
<li>Function template</li>
</ol>
<h3 id="class-template" tabindex="-1"><a class="header-anchor" href="#class-template" aria-hidden="true">#</a> Class template</h3>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>template &lt;class T&gt;
class Pair {
 public:
  Pair(T fst, T snd);
  T fst();
  T snd();
 private:
  const T fst_;
  const T snd_;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>template parameter 생략 가능</li>
<li>원시적 자료형 (int, char...) 도 섞어서 사용 가능</li>
<li>링크 오류 발생 가능
<ol>
<li>해결책 : 헤더파일 안에 template 멤버 함수들을 정의한다</li>
<li>해결책 : cc 파일 상단에 template 함수 정의</li>
</ol>
</li>
</ul>
<h3 id="function-template" tabindex="-1"><a class="header-anchor" href="#function-template" aria-hidden="true">#</a> Function template</h3>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>template &lt;typename T&gt;
T Max(T x, T y) {
  return (x &gt; y)? x : y;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Template function overload resolution</strong></p>
<ol>
<li>정확히 일치하는 함수 탐색</li>
<li>function templates 탐색</li>
<li>원래의 overload resolution 수행
<ol>
<li>정확히 일치하는 함수 탐색</li>
<li>Promotion (-&gt; 더 큰 자료형) 탐색</li>
<li>Standard Type conversion</li>
<li>Implicit or user-defined type conversion</li>
<li>Error</li>
</ol>
</li>
</ol>
<h2 id="exception-handling" tabindex="-1"><a class="header-anchor" href="#exception-handling" aria-hidden="true">#</a> Exception handling</h2>
<h3 id="ranges-of-data-types" tabindex="-1"><a class="header-anchor" href="#ranges-of-data-types" aria-hidden="true">#</a> ranges of data types</h3>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>#include &lt;limits&gt;
std::number_limits&lt;int&gt;::lowest()
std::number_limits&lt;int&gt;::min()
std::number_limits&lt;int&gt;::max()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>lowest()와 min()의 차이점</strong></li>
</ul>
<h3 id="handle-overflow" tabindex="-1"><a class="header-anchor" href="#handle-overflow" aria-hidden="true">#</a> handle overflow</h3>
<ol>
<li>
<p>Wrap around : 오버플로우 생긴 직후 값으로 제한</p>
</li>
<li>
<p>Saturation : 오버플로우 나기 직전까지로 제한</p>
</li>
<li>
<p>Exception : 개발자가 직접 예외 처리</p>
</li>
</ol>
<ul>
<li>
<p>detection for integer overflow</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>if (x &gt; 0 &amp;&amp; y &gt; 0) {
if (x &gt; kMax - y) //overflow
}
if (x &lt; 0 &amp;&amp; y &lt; 0) {
if (x &lt; kMin - y) //overflow
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Wrap around for overflow</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>static int WrapAroundForMax(int x, int y) {
return kMin + (x - (kMax - y + 1));
}
static int WrapAroundForMin(int x, int y) {
return kMax + (x - (kMin - y - 1));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Saturation for overflow</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>static int SaturateForOverflow(int x, int y) {
return kMax;
}
static int SaturateForUnderflow(int x, int y) {
return kMin;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="error-handling-in-c" tabindex="-1"><a class="header-anchor" href="#error-handling-in-c" aria-hidden="true">#</a> Error handling in C++</h3>
<ul>
<li>Uncaught exception -&gt; Runtime error</li>
<li>catch all(...)</li>
<li><i>noexcept</i> keyword</li>
</ul>
<h1 id="algorithm" tabindex="-1"><a class="header-anchor" href="#algorithm" aria-hidden="true">#</a> Algorithm</h1>
<h3 id="dikjstra" tabindex="-1"><a class="header-anchor" href="#dikjstra" aria-hidden="true">#</a> Dikjstra</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cw<span class="token punctuation">,</span> cx<span class="token punctuation">,</span> cy <span class="token operator">=</span> heapq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        nx <span class="token operator">=</span> cx<span class="token operator">+</span>dx<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        ny <span class="token operator">=</span> cy<span class="token operator">+</span>dy<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

        <span class="token keyword">for</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> nx <span class="token operator">&lt;</span> N <span class="token keyword">and</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> nx <span class="token operator">&lt;</span> M<span class="token punctuation">:</span>
            nw <span class="token operator">=</span> cw <span class="token operator">+</span> MAP<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span>
            <span class="token keyword">if</span> nw <span class="token operator">&lt;</span> D<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span><span class="token punctuation">:</span>
                D<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span> <span class="token operator">=</span> nw
                heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token punctuation">(</span>nw<span class="token punctuation">,</span> nx<span class="token punctuation">,</span> ny<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dikstra" tabindex="-1"><a class="header-anchor" href="#dikstra" aria-hidden="true">#</a> Dikstra</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cw<span class="token punctuation">,</span> cx<span class="token punctuation">,</span> cy <span class="token operator">=</span> heapq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        nx <span class="token operator">=</span> cx<span class="token operator">+</span>dx<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        ny <span class="token operator">=</span> cy<span class="token operator">+</span>dy<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

        <span class="token keyword">for</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> nx <span class="token operator">&lt;</span> N <span class="token keyword">and</span> <span class="token number">0</span><span class="token operator">&lt;=</span> ny <span class="token operator">&lt;</span> M<span class="token punctuation">:</span>
            nw <span class="token operator">=</span> cw<span class="token operator">+</span>MAP<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span>
            <span class="token keyword">if</span> nw <span class="token operator">&lt;</span> MAP<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span><span class="token punctuation">:</span>
                D<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span> <span class="token operator">=</span> nw
                heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token punctuation">(</span>nw<span class="token punctuation">,</span> nx<span class="token punctuation">,</span> ny<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dikstra-1" tabindex="-1"><a class="header-anchor" href="#dikstra-1" aria-hidden="true">#</a> Dikstra</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cw<span class="token punctuation">,</span> cn <span class="token operator">=</span> heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">)</span>

    <span class="token keyword">if</span> dp<span class="token punctuation">[</span>cn<span class="token punctuation">]</span> <span class="token operator">&lt;</span> cw<span class="token punctuation">:</span> <span class="token keyword">continue</span>

    <span class="token keyword">for</span> w<span class="token punctuation">,</span> n <span class="token keyword">in</span> G<span class="token punctuation">[</span>cn<span class="token punctuation">]</span><span class="token punctuation">:</span>
        nw <span class="token operator">=</span> w <span class="token operator">+</span> cw
        <span class="token keyword">if</span> nw <span class="token operator">&lt;</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">:</span>
            dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> nw
            heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token punctuation">[</span>nw<span class="token punctuation">,</span> n<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> dp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bellman-ford" tabindex="-1"><a class="header-anchor" href="#bellman-ford" aria-hidden="true">#</a> Bellman Ford</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>D<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>V<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>E<span class="token punctuation">)</span><span class="token punctuation">:</span>
        a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> G<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token keyword">if</span> D<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">!=</span> INF <span class="token keyword">and</span> D<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">></span>D<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>c<span class="token punctuation">:</span>
            D<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> D<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>c
            <span class="token keyword">if</span> i <span class="token operator">==</span> V<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">True</span>
<span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dikstra-2" tabindex="-1"><a class="header-anchor" href="#dikstra-2" aria-hidden="true">#</a> Dikstra</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cn<span class="token punctuation">,</span> cw <span class="token operator">=</span> heapq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span>q<span class="token punctuation">)</span>

    <span class="token keyword">if</span> D<span class="token punctuation">[</span>cn<span class="token punctuation">]</span> <span class="token operator">&lt;</span> cw<span class="token punctuation">:</span>
        <span class="token keyword">continue</span>

    <span class="token keyword">for</span> n<span class="token punctuation">,</span> w <span class="token keyword">in</span> G<span class="token punctuation">[</span>cn<span class="token punctuation">]</span><span class="token punctuation">:</span>
        nw <span class="token operator">=</span> cw <span class="token operator">+</span> w
        <span class="token keyword">if</span> nw <span class="token operator">&lt;</span> D<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">:</span>
            D<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> nw
            heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token punctuation">[</span>n<span class="token punctuation">,</span> nw<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dikstra-3" tabindex="-1"><a class="header-anchor" href="#dikstra-3" aria-hidden="true">#</a> Dikstra</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cw<span class="token punctuation">,</span> cn <span class="token operator">=</span> heapq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span>q<span class="token punctuation">)</span>
    <span class="token keyword">if</span> D<span class="token punctuation">[</span>cn<span class="token punctuation">]</span> <span class="token operator">&lt;</span> cw<span class="token punctuation">:</span> <span class="token keyword">continue</span>

    <span class="token keyword">for</span> w<span class="token punctuation">,</span> n <span class="token keyword">in</span> G<span class="token punctuation">[</span>cn<span class="token punctuation">]</span><span class="token punctuation">:</span>
        nw <span class="token operator">=</span> w<span class="token operator">+</span>cw
        <span class="token keyword">if</span> nw <span class="token operator">&lt;</span> D<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">:</span>
            D<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> nw
            heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token punctuation">(</span>nw<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bellman-ford-1" tabindex="-1"><a class="header-anchor" href="#bellman-ford-1" aria-hidden="true">#</a> Bellman ford</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dp<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>V<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>E<span class="token punctuation">)</span><span class="token punctuation">:</span>
        a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> G<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token keyword">if</span> dp<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">!=</span> INF <span class="token keyword">and</span> dp<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">></span> dp<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>c<span class="token punctuation">:</span>
            dp<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>c
            <span class="token keyword">if</span> i <span class="token operator">==</span> V<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">True</span>
<span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dikstra-4" tabindex="-1"><a class="header-anchor" href="#dikstra-4" aria-hidden="true">#</a> Dikstra</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cw<span class="token punctuation">,</span> cx<span class="token punctuation">,</span> cy <span class="token operator">=</span> heapq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span>q<span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        nx <span class="token operator">=</span> cx<span class="token operator">+</span>dx<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        ny <span class="token operator">=</span> cy<span class="token operator">+</span>dy<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> nx <span class="token operator">&lt;</span> N <span class="token keyword">and</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> ny <span class="token operator">&lt;</span> M<span class="token punctuation">:</span>
            nw <span class="token operator">=</span> cw <span class="token operator">+</span> MAP<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span>
            <span class="token keyword">if</span> nw <span class="token operator">&lt;</span> D<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span><span class="token punctuation">:</span>
                D<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span> <span class="token operator">=</span> nw
                heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token punctuation">(</span>nw<span class="token punctuation">,</span> nx<span class="token punctuation">,</span> ny<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="floyd-warshall" tabindex="-1"><a class="header-anchor" href="#floyd-warshall" aria-hidden="true">#</a> Floyd warshall</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span>
    G<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
            G<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>G<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> G<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+</span>G<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="floyd-warshall-1" tabindex="-1"><a class="header-anchor" href="#floyd-warshall-1" aria-hidden="true">#</a> Floyd warshall</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
    G<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
            G<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>G<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> G<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+</span>G<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="topological-sort" tabindex="-1"><a class="header-anchor" href="#topological-sort" aria-hidden="true">#</a> Topological Sort</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cur <span class="token operator">=</span> q<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ans<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> G<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">:</span>
        inDegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token keyword">if</span> inDegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            q<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="topological-sort-1" tabindex="-1"><a class="header-anchor" href="#topological-sort-1" aria-hidden="true">#</a> Topological Sort</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cur <span class="token operator">=</span> q<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ans<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> G<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">:</span>
        inDegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token keyword">if</span> inDegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            q<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toppological-sort" tabindex="-1"><a class="header-anchor" href="#toppological-sort" aria-hidden="true">#</a> Toppological sort</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cur <span class="token operator">=</span> q<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ans<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> G<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">:</span>
        inDegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token keyword">if</span> inDegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            q<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dijkstra-인접행렬" tabindex="-1"><a class="header-anchor" href="#dijkstra-인접행렬" aria-hidden="true">#</a> Dijkstra (인접행렬)</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cw<span class="token punctuation">,</span> cx<span class="token punctuation">,</span> cy <span class="token operator">=</span> heapq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span>q<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        nx <span class="token operator">=</span> cx<span class="token operator">+</span>dx<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        ny <span class="token operator">=</span> cy<span class="token operator">+</span>dy<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> nx <span class="token operator">&lt;</span> M <span class="token keyword">and</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> ny <span class="token operator">&lt;</span> N<span class="token punctuation">:</span>
            nw <span class="token operator">=</span> cw <span class="token operator">+</span> MAP<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span>
            <span class="token keyword">if</span> nw <span class="token operator">&lt;</span> D<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span><span class="token punctuation">:</span>
                D<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span> <span class="token operator">=</span> nw
                heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token punctuation">(</span>nw<span class="token punctuation">,</span> nx<span class="token punctuation">,</span> ny<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dijkstra-간선" tabindex="-1"><a class="header-anchor" href="#dijkstra-간선" aria-hidden="true">#</a> Dijkstra (간선)</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> q<span class="token punctuation">:</span>
    cw<span class="token punctuation">,</span> cn <span class="token operator">=</span> heqpq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span>q<span class="token punctuation">)</span>

    <span class="token keyword">if</span> D<span class="token punctuation">[</span>cn<span class="token punctuation">]</span> <span class="token operator">&lt;</span> cw<span class="token punctuation">:</span> <span class="token keyword">continue</span>

    <span class="token keyword">for</span> w<span class="token punctuation">,</span> n <span class="token keyword">in</span> G<span class="token punctuation">[</span>cn<span class="token punctuation">]</span><span class="token punctuation">:</span>
        nw <span class="token operator">=</span> w <span class="token operator">+</span> cw
        <span class="token keyword">if</span> nw <span class="token operator">&lt;</span> D<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">:</span>
            D<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> nw
            heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token punctuation">(</span>nw<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bellman-ford-2" tabindex="-1"><a class="header-anchor" href="#bellman-ford-2" aria-hidden="true">#</a> Bellman Ford</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dp<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>V<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>E<span class="token punctuation">)</span><span class="token punctuation">:</span>
        a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> G<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token keyword">if</span> dp<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">!=</span> INF <span class="token keyword">and</span> dp<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">></span> dp<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>c<span class="token punctuation">:</span>
            dp<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>c
            <span class="token keyword">if</span> i <span class="token operator">==</span> V<span class="token operator">-</span><span class="token number">1</span>
                <span class="token keyword">return</span> <span class="token boolean">True</span>
<span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kruskal" tabindex="-1"><a class="header-anchor" href="#kruskal" aria-hidden="true">#</a> Kruskal</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">*</span>V
<span class="token keyword">def</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> P<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">!=</span> x<span class="token punctuation">:</span>
        P<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> find<span class="token punctuation">(</span>P<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> P<span class="token punctuation">[</span>x<span class="token punctuation">]</span>
<span class="token keyword">def</span> <span class="token function">union</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a <span class="token operator">&lt;</span> b<span class="token punctuation">:</span>
        P<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> a
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        P<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="knapsack" tabindex="-1"><a class="header-anchor" href="#knapsack" aria-hidden="true">#</a> Knapsack</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> K<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        curW<span class="token punctuation">,</span> curV <span class="token operator">=</span> item<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

        <span class="token keyword">if</span> curW <span class="token operator">&lt;=</span> j<span class="token punctuation">:</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> curV <span class="token operator">+</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span>curW<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> K<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        curW<span class="token punctuation">,</span> curV <span class="token operator">=</span> item<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

        <span class="token keyword">if</span> curW <span class="token operator">&lt;=</span> j<span class="token punctuation">:</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> curV <span class="token operator">+</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span>curW<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lis" tabindex="-1"><a class="header-anchor" href="#lis" aria-hidden="true">#</a> LIS</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cnt <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> L<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">></span>L<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
T <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>T<span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> T<span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>L<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        T <span class="token operator">-=</span> <span class="token number">1</span>
result<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lcs" tabindex="-1"><a class="header-anchor" href="#lcs" aria-hidden="true">#</a> LCS</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>LCS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">*</span>N2 <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N1<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N1<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> S1<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> S2<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            LCS<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> LCS<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            LCS<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>LCS<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> LCS<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


